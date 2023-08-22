'use client';

import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Img from '../common/Img';

interface IProps {
  content: string;
}

export default function MarkdownViewer({ content }: IProps) {
  return (
    <div className="w-full">
      <ReactMarkdown
        children={content}
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                {...props}
                style={oneDark}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
          img: ({ node, ...props }) => {
            return (
              <Img src={props.src} alt={props.alt} className="max-w-full" />
            );
          },
        }}
      />
    </div>
  );
}
