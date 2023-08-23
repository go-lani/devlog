'use client';

import { CodeProps } from 'react-markdown/lib/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type SyntaxProps = {
  language: string;
} & CodeProps;

export default function Syntax({
  children,
  language,
  node,
  ...props
}: SyntaxProps) {
  return (
    <>
      <span className="language-text">{language}</span>
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        {...props}
        style={oneDark}
        language={language}
        showLineNumbers
        customStyle={{ margin: 0, borderRadius: 0 }}
      />
    </>
  );
}
