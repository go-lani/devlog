import Image from 'next/image';
import { Metadata } from 'next/types';
import { notFound } from 'next/navigation';
import { getFeaturedPosts, getPost, getSnippetPost } from '@/service/posts';
import MarkdownViewer from '@/components/post/detail/MarkdownViewer';
import { getDateString } from '@/utils/date';
import Sidebar from '@/components/post/detail/Sidebar';
import PageNavigator from '@/components/post/detail/PageNavigator';
import { PostDetail } from '@/types/post';
import Comments from '@/components/post/detail/Comments';

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  try {
    const {
      meta: { title, description },
    } = await getPost(slug);

    return { title, description };
  } catch (err) {
    notFound();
    return {};
  }
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map(({ meta: { path } }) => ({ slug: path }));
}

interface Props {
  params: { slug: string };
}

export default async function DetailPage({ params: { slug } }: Props) {
  let post: PostDetail;
  try {
    post = await getSnippetPost(slug);
  } catch (err) {
    notFound();
  }

  return (
    <>
      <section className="container-layout border-style grow-0 border-b bg-zinc-800">
        <div className="content-layout border-style relative justify-center border-x text-center text-app-white">
          <div className="flex flex-col justify-center px-4 py-16 md:px-5 md:py-20">
            {post.meta.series && (
              <p className="mb-3 text-sm">
                {post.meta.series}{' '}
                {post.meta.series_number && `- ${post.meta.series_number}`}
              </p>
            )}
            <h1 className="text-xl md:text-4xl">{post.meta.title}</h1>
          </div>
        </div>
      </section>
      <section className="container-layout border-style grow-0 border-b bg-zinc-800">
        <div className="content-layout">
          <div className="border-style align-center flex justify-center border-x text-app-white md:justify-start md:text-center">
            <p className="border-style border-l p-5 text-sm md:border-l-0">
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
      <section className="container-layout bg-zinc-800">
        <div className="content-layout border-style flex flex-col border-x">
          <div className="flex">
            <Sidebar toc={post.toc} tags={post.meta.tags} />
            <div className="flex w-full flex-col bg-neutral-800 lg:w-[742px]">
              <MarkdownViewer content={post.content} />
              {(post.next || post.prev) && (
                <PageNavigator
                  type="snippet"
                  next={post.next}
                  prev={post.prev}
                />
              )}
              <Comments />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}