import { getPost } from '@/service/posts';
import MarkdownViewer from '@/components/post/MarkdownViewer';
import { getDateString } from '@/utils/date';
import Image from 'next/image';

interface Props {
  params: { slug: string };
}

export default async function DetailPage({ params: { slug } }: Props) {
  const post = await getPost(slug);
  const categories = [...post.meta.tags];
  const displayCategories = categories.splice(0, 3);
  console.log('post.meta.tags', post.meta.tags);
  return (
    <>
      <div className="container-layout border-style grow-0 border-b bg-zinc-800">
        <div className="content-layout border-style text-app-white relative justify-center border-x text-center">
          <div className="px-5 py-16 md:py-32">
            {post.meta.series && (
              <p className="mb-3">
                {post.meta.series}{' '}
                {post.meta.series_number && `- ${post.meta.series_number}`}
              </p>
            )}
            <h2 className="text-xl md:text-4xl">{post.meta.title}</h2>
          </div>
          <div className="border-style flex w-full flex-col items-end justify-center border-t md:flex-row">
            <ul className="border-style order-1 flex w-[100%] grow flex-nowrap items-center justify-start gap-4 self-center overflow-x-auto border-y px-4 md:order-[-1] md:flex-wrap md:gap-6 md:px-6">
              {displayCategories.map((category) => (
                <li
                  key={category}
                  className="border-style text-app-light-yellow shrink-0 border-x px-2 py-1"
                >
                  {category}
                </li>
              ))}
              {categories.length > 0 && (
                <li className="border-style text-app-light-yellow shrink-0 border-x px-2 py-1">
                  외 {categories.length}
                </li>
              )}
            </ul>
            <div className="border-style flex w-[100%] justify-center md:order-1 md:block md:w-[20%] md:border-l md:text-center">
              <h3 className="p-2 text-sm">
                {getDateString({ inputDate: post.meta.date })}
              </h3>
              <p className="border-style flex items-center justify-center gap-1 p-2 text-sm md:border-t">
                <span>
                  <Image
                    src="/assets/images/icons/timer.svg"
                    width={21}
                    height={21}
                    alt=""
                  />
                </span>
                약 {post.meta.readingMinutes}분
              </p>
            </div>
          </div>
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
