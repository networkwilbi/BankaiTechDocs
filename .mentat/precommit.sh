#!/bin/bash

# Enhanced precommit script for Docusaurus project
echo "====== Running Precommit Checks ======"

# Check for syntax errors in TypeScript/JavaScript files
echo "🔍 Checking for TypeScript/JavaScript syntax errors..."
if npx tsc --noEmit; then
  echo "✅ TypeScript check passed."
else
  echo "❌ TypeScript check failed. Please fix the syntax errors before committing."
  exit 1
fi

# Run a limited build check to catch major issues without full build time
echo "🔍 Running build check..."

# Add additional flags for docusaurus build to make it more helpful
# Using --out-dir /tmp/docusaurus-build to avoid polluting the main directory
if npm run build -- --out-dir /tmp/docusaurus-build; then
  echo "✅ Build check passed! Changes look good."
  exit 0
else
  echo "❌ Build check failed!"
  echo ""
  echo "Common Docusaurus build issues:"
  echo "  1. Sidebar configuration errors - Check if document paths match actual file paths"
  echo "  2. React version compatibility issues - Make sure package.json specifies React 18.x"
  echo "  3. Missing dependencies - You might need to run 'npm install --legacy-peer-deps'"
  echo ""
  echo "For detailed error information, review the build output above."
  exit 1
fi