'use client';

import { Prism as SyntaxHighlighterBase } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SyntaxHighlighter = SyntaxHighlighterBase as any;

export default function Syntax({ children, language, node, ...props }: any) {
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
