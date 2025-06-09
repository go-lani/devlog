import MDXViewer from '@/components/common/MDXViewer';
import { PostDetail } from '@/types/post';

import Comments from './Comments';
import PageNavigator from './PageNavigator';
import SeriesNavigator from './SeriesNavigator';
import Sidebar from './Sidebar';

interface Props {
  type: 'Posts' | 'Snippet';
  post: PostDetail;
}

export default function PostContent({ type, post }: Props) {
  return (
    <section className="container-layout bg-zinc-800">
      <div className="content-layout border-style flex flex-col border-x">
        <div className="flex">
          <Sidebar toc={post.toc} tags={post.meta.tags} />
          <div className="flex w-full flex-col bg-neutral-800 xl:w-[742px]">
            <MDXViewer serialized={post.content} />
            {post.meta.series && type === 'Posts' && (
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
