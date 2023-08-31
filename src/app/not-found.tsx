import Link from 'next/link';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Not Found',
  description: '페이지를 찾을 수 없어요.',
};

export default async function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-zinc-800 text-app-white">
      <img
        src="/assets/images/icons/not-found.svg"
        alt="page not found"
        className="h-[128px] w-[128px]"
      />
      <p className="mt-8 text-2xl">페이지를 찾을 수 없어요</p>
      <Link href="/" className="mt-2 flex items-center gap-2">
        <p>홈으로</p>
        <img
          src="/assets/images/icons/right-arrow.svg"
          alt="move to home"
          className="h-[18px] w-[18px]"
        />
      </Link>
    </div>
  );
}
