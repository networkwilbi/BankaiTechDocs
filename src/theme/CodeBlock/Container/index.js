import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Container({
  as: As,
  className,
  children,
}) {
  return (
    <As
      className={clsx(
        styles.codeBlockContainer,
        'theme-code-block',
        className,
      )}>
      {children}
    </As>
  );
}