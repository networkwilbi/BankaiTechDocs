import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {ThemeClassNames, usePrismTheme} from '@docusaurus/theme-common';
import {
  parseCodeBlockTitle,
  parseLanguage,
  parseLines,
  containsLineNumbers,
  useCodeWordWrap,
} from '@docusaurus/theme-common/internal';
import Container from '@theme/CodeBlock/Container';
import CopyButton from '@theme/CodeBlock/CopyButton';
import Line from '@theme/CodeBlock/Line';
import WordWrapButton from '@theme/CodeBlock/WordWrapButton';
import styles from './styles.module.css';

// Ensure the copy button is always visible and functional
export default function CodeBlock({
  children,
  className: blockClassName = '',
  metastring,
  title,
  language: languageProp,
  showLineNumbers: showLineNumbersProp,
}) {
  const {
    siteConfig: {themeConfig},
  } = useDocusaurusContext();
  const prismTheme = usePrismTheme();
  const wordWrap = useCodeWordWrap();

  // Parse meta string
  const language = languageProp ?? parseLanguage(blockClassName);
  const {lineNumbers, showLineNumbers} = parseLines(
    metastring,
    {
      showLineNumbers: showLineNumbersProp,
      language,
    },
  );
  const code = children.trim();

  return (
    <Container
      as="div"
      className={clsx(
        blockClassName,
        language &&
          !blockClassName.includes(`language-${language}`) &&
          `language-${language}`,
      )}>
      <div className={styles.codeBlockContent}>
        <pre
          /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
          tabIndex={0}
          className={clsx(
            styles.codeBlock,
            'prism-code',
            'thin-scrollbar',
            showLineNumbers && styles.codeBlockWithLineNumbers,
          )}
          style={prismTheme}>
          <code className={styles.codeBlockLines}>
            {code}
          </code>
        </pre>
        <div className={styles.buttonGroup}>
          {/* Always show copy button */}
          <CopyButton code={code} />
          {wordWrap.isEnabled && <WordWrapButton />}
        </div>
      </div>
    </Container>
  );
}