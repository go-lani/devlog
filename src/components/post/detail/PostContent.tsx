import { PostDetail } from '@/types/post';
import Sidebar from './Sidebar';
import MarkdownViewer from './MarkdownViewer';
import SeriesNavigator from './SeriesNavigator';
import PageNavigator from './PageNavigator';
import Comments from './Comments';

interface Props {
  type: 'posts' | 'snippet';
  post: PostDetail;
}

export default function PostContent({ type, post }: Props) {
  return (
    <section className="container-layout bg-zinc-800">
      <div className="content-layout border-style flex flex-col border-x">
        <div className="flex">
          <Sidebar toc={post.toc} tags={post.meta.tags} />
          <div className="flex w-full flex-col bg-neutral-800 lg:w-[742px]">
            <MarkdownViewer content={post.content} />
            {post.meta.series && type === 'posts' && (
              <SeriesNavigator seriesName={post.meta.series} />
            )}
            {(post.next || post.prev) && (
              <PageNavigator type={type} next={post.next} prev={post.prev} />
            )}
            <Comments />
          </div>
        </div>
      </div>
    </section>
  );
}
