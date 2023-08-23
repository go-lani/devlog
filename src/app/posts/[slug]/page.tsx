import { getPost } from '@/service/posts';
import MarkdownViewer from '@/components/post/MarkdownViewer';

interface IProps {
  params: { slug: string };
}

export default async function DetailPage({ params: { slug } }: IProps) {
  const post = await getPost(slug);
  return (
    <>
      <div className="container-layout border-style grow-0 border-b">
        <div className="content-layout border-style border-x">
          <h1>{post.meta.title}</h1>
          <h2>{post.meta.description}</h2>
          {post.meta.series && (
            <p>
              {post.meta.series}{' '}
              {post.meta.series_number && `- ${post.meta.series_number}`}
            </p>
          )}
          <ul>
            <li />
          </ul>
        </div>
      </div>
      <div className="container-layout border-style">
        <div className="content-layout border-style border-x p-5">
          <MarkdownViewer content={post.content} />
        </div>
      </div>
    </>
  );
}
