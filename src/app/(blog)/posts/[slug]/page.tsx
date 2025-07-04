import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next/types';

import PostContent from '@/components/detail/PostContent';
import { getPost, getPostSlugs } from '@/service/posts';
import { PostDetail } from '@/types/post';
import { getDateString } from '@/utils/date';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  try {
    const {
      meta: { title, description },
    } = await getPost(slug, 'Posts');

    return { title, description };
  } catch (err) {
    notFound();
    return {};
  }
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs('Posts');
  return slugs;
}

export default async function DetailPage({ params }: Props) {
  const { slug } = params;
  let post: PostDetail;
  try {
    post = await getPost(slug, 'Posts');
  } catch (err) {
    notFound();
  }

  return (
    <>
      <section className="container-layout border-style grow-0 border-b bg-zinc-800">
        <div className="content-layout border-style relative justify-center border-x text-center text-app-white">
          <div className="flex flex-col justify-center px-4 py-16 lg:px-5 lg:py-20">
            {post.meta.series && (
              <p className="mb-3 text-sm">
                {post.meta.series}{' '}
                {post.meta.series_number && `- ${post.meta.series_number}`}
              </p>
            )}
            <h1 className="text-xl lg:text-4xl">{post.meta.title}</h1>
          </div>
        </div>
      </section>
      <section className="container-layout border-style grow-0 border-b bg-zinc-800">
        <div className="content-layout">
          <div className="border-style align-center flex justify-center border-x text-app-white lg:justify-start lg:text-center">
            <p className="border-style border-l p-5 text-sm lg:border-l-0">
              {getDateString({ inputDate: post.meta.date })}
            </p>
            <p className="border-style flex items-center justify-center gap-1 border-x p-5 text-sm">
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
      </section>
      <PostContent type="Posts" post={post} />
    </>
  );
}
