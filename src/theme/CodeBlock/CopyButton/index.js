import React, {useCallback, useState} from 'react';
import clsx from 'clsx';
import copy from 'copy-text-to-clipboard';
import styles from './styles.module.css';

export default function CopyButton({code}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback(() => {
    copy(code);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }, [code]);

  return (
    <button
      type="button"
      aria-label={isCopied ? 'Copied' : 'Copy code to clipboard'}
      title={isCopied ? 'Copied' : 'Copy code to clipboard'}
      className={clsx(
        'clean-btn',
        styles.copyButton,
        isCopied && styles.copyButtonCopied,
      )}
      onClick={handleCopy}>
      <span className={styles.copyButtonIcons}>
        <svg
          className={styles.copyButtonIcon}
          viewBox="0 0 24 24">
          <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
        </svg>
        <svg
          className={styles.copyButtonSuccessIcon}
          viewBox="0 0 24 24">
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        </svg>
      </span>
    </button>
  );
}