import React, { Suspense } from 'react';
import { getPost } from '@/service/posts';
import MarkdownViewer from '@/components/post/MarkdownViewer';

interface IProps {
  params: { slug: string };
}

export default async function DetailPage({ params: { slug } }: IProps) {
  const post = await getPost(slug);
  return (
    <>
      <h1>{post.meta.title}</h1>
      <MarkdownViewer content={post.content} />
    </>
  );
}
