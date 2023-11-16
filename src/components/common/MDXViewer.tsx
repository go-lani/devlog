'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { ImageViewerProvider } from '@lani.ground/react-image-viewer';
import '@lani.ground/react-image-viewer/css';
import Syntax from '../detail/SyntaxHighlighter';

export default function MDXViewer({
  serialized,
  components,
  isPackage = false,
}: {
  serialized: MDXRemoteSerializeResult;
  components?: {
    [key: string]: () => JSX.Element;
  };
  isPackage?: boolean;
}) {
  return (
    serialized &&
    (!isPackage ? (
      <ImageViewerProvider>
        <div className="markdown-viewer box-border w-full bg-neutral-800 p-4 text-app-white md:p-5">
          <MDXRemote
            {...serialized}
            components={{
              ...components,
              code: ({ node, inline, className, children, ...props }: any) => {
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
              img: ({ node, ...props }: any) => {
                return (
                  <img
                    src={props.src!}
                    alt={props.alt || ''}
                    className="max-w-full drag-none"
                  />
                );
              },
            }}
          />
        </div>
      </ImageViewerProvider>
    ) : (
      <MDXRemote
        {...serialized}
        components={{
          ...components,
          code: ({ node, inline, className, children, ...props }: any) => {
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
          img: ({ node, ...props }: any) => {
            return (
              <img
                src={props.src!}
                alt={props.alt || ''}
                className="max-w-full drag-none"
              />
            );
          },
        }}
      />
    ))
  );
}
