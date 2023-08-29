import { getPost } from '@/service/posts';
import MarkdownViewer from '@/components/post/detail/MarkdownViewer';
import { getDateString } from '@/utils/date';
import Image from 'next/image';
import Sidebar from '@/components/post/detail/Sidebar';

interface Props {
  params: { slug: string };
}

export default async function DetailPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  return (
    <>
      <section className="container-layout border-style grow-0 border-b bg-neutral-900">
        <div className="content-layout border-style relative justify-center border-x text-center text-app-white">
          <div className="flex flex-col justify-center px-4 py-16 md:px-5 md:py-28">
            {post.meta.series && (
              <p className="mb-3">
                {post.meta.series}{' '}
                {post.meta.series_number && `- ${post.meta.series_number}`}
              </p>
            )}
            <h1 className="text-xl md:text-4xl">{post.meta.title}</h1>
          </div>
        </div>
      </section>
      <div className="container-layout border-style grow-0 border-b bg-neutral-900">
        <div className="content-layout">
          <div className="border-style align-center flex justify-center border-x text-app-white md:justify-start md:text-center">
            <p className="border-style border-l p-2 text-sm md:border-l-0">
              {getDateString({ inputDate: post.meta.date })}
            </p>
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
      <section className="container-layout border-style">
        <div className="content-layout border-style flex border-x">
          <Sidebar toc={post.toc} tags={post.meta.tags} />
          <MarkdownViewer content={post.content} />
        </div>
      </section>
    </>
  );
}
