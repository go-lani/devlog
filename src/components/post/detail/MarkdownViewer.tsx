import ReactMarkdown from 'react-markdown';
import React from 'react';
import remarkCodeTitle from 'remark-code-title';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import transformImgSrc from '@/utils/transformImgSrc';
import ImgViewerProvider from '@/components/common/imgViewer/ImgViewerProvider';
import Syntax from './SyntaxHighlighter';

interface IProps {
  content: string;
}

export default function MarkdownViewer({ content }: IProps) {
  return (
    <ImgViewerProvider>
      <div className="markdown-viewer box-border w-full bg-neutral-800 p-4 text-app-white md:p-5">
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
                  className="drag-none max-w-full cursor-zoom-in"
                />
              );
            },
          }}
        />
      </div>
    </ImgViewerProvider>
  );
}
