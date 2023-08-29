import ReactMarkdown from 'react-markdown';
import React from 'react';
import remarkCodeTitle from 'remark-code-title';
import transformImgSrc from '@/utils/transformImgSrc';
import Syntax from './SyntaxHighlighter';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

interface IProps {
  content: string;
}

export default function MarkdownViewer({ content }: IProps) {
  return (
    <div className="markdown-viewer box-border w-full p-4 md:p-5">
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm, remarkCodeTitle, transformImgSrc]}
        rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <Syntax
                node={node}
                children={children}
                language={match[1]}
                {...props}
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
          img: ({ node, ...props }) => {
            return (
              <img
                src={props.src!}
                alt={props.alt || ''}
                className="max-w-full"
              />
            );
          },
        }}
      />
    </div>
  );
}
