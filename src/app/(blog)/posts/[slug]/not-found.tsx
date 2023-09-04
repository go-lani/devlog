import Link from 'next/link';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Post Not Found',
  description: '포스트를 찾을 수 없어요.',
};

export default async function NotFound() {
  return (
    <div className="container-layout bg-zinc-800">
      <div className="content-layout bg-neutral-800 text-app-white">
        <div className="flex flex-col items-center justify-center py-32">
          <img
            src="/assets/images/icons/not.svg"
            className="h-[80px] w-[80px]"
            alt="series is empty"
          />
          <p className="mt-6">해당 포스트를 찾을 수 없어요</p>
          <Link href="/posts" className="mt-2 flex items-center gap-2">
            <p>다른 포스트 보러가기</p>
            <img
              src="/assets/images/icons/right-arrow.svg"
              alt="move to posts"
              className="h-[18px] w-[18px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
