'use client';

import { Prism as SyntaxHighlighterBase } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const SyntaxHighlighter = SyntaxHighlighterBase as any;

export default function Syntax({
  children,
  language,
  node,
  isPlayground = false,
  ...props
}: any) {
  return (
    <div className="w-full overflow-x-auto">
      {!isPlayground && <span className="language-text">{language}</span>}
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        {...props}
        style={oneDark}
        language={language}
        showLineNumbers
        customStyle={{
          margin: 0,
          borderRadius: isPlayground ? 10 : 0,
          fontSize: '0.825rem',
          boxSizing: 'border-box',
          overflow: 'hidden',
          width: 'fit-content',
          minWidth: '100%',
        }}
      />
    </div>
  );
}
