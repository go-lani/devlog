import { getPost } from '@/service/posts';
import MarkdownViewer from '@/components/post/MarkdownViewer';
import { getDateString } from '@/utils/date';
import Image from 'next/image';
import TableOfContent from '@/components/post/TableOfContent';
import Sidebar from '@/components/post/Sidebar';

interface Props {
  params: { slug: string };
}

export default async function DetailPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  return (
    <>
      <div className="container-layout border-style grow-0 border-b bg-neutral-900">
        <div className="content-layout border-style text-app-white relative justify-center border-x text-center">
          <div className="flex flex-col justify-center px-4 py-16 md:px-5 md:py-28">
            {post.meta.series && (
              <p className="border-style mb-3 border-y py-4">
                {post.meta.series}{' '}
                {post.meta.series_number && `- ${post.meta.series_number}`}
              </p>
            )}
            <h2 className="text-xl md:text-4xl">{post.meta.title}</h2>
          </div>
          <div className="border-style align-center flex justify-center border-t md:justify-start md:text-center">
            <h3 className="border-style border-l p-2 text-sm md:border-l-0">
              {getDateString({ inputDate: post.meta.date })}
            </h3>
            <p className="border-style flex items-center justify-center gap-1 border-x p-2 text-sm">
              <Image
                src="/assets/images/icons/timer.svg"
                width={21}
                height={21}
                alt=""
              />
              약 {post.meta.readingMinutes}분
            </p>
          </div>
        </div>
      </div>
      <div className="container-layout border-style">
        <div className="content-layout border-style flex border-x">
          <Sidebar toc={post.toc} tags={post.meta.tags} />
          <MarkdownViewer content={post.content} />
        </div>
      </div>
    </>
  );
}
