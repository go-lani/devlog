import Link from 'next/link';
import { Post } from '@/types/post';

type Props = {
  prev: Post | null;
  next: Post | null;
};

export default function PageNavigator({ next, prev }: Props) {
  return (
    <div className="flex-between border-style mt-auto flex border-t bg-zinc-800 text-app-white">
      <div className="border-style flex w-[50%] p-4">
        {prev && (
          <Link href={`/posts/${prev.meta.path}`} className="flex gap-4">
            <span>
              <img
                src="/assets/images/icons/left-arrow.svg"
                alt="prev"
                className="h-[18px] w-[18px]"
              />
            </span>
            <div className="flex flex-col items-start gap-1">
              <p className="text-sm text-neutral-500">prev</p>
              <p className="max-w-[120px] truncate text-neutral-300 md:max-w-[200px]">
                {prev.meta.title}
                {prev.meta.title}
                {prev.meta.title}
              </p>
            </div>
          </Link>
        )}
      </div>
      <div className="flex w-[50%] justify-end p-4">
        {next && (
          <Link href={`/posts/${next.meta.path}`} className="flex gap-4">
            <div className="flex flex-col items-end gap-1">
              <p className="text-sm text-neutral-500">next</p>
              <p className="max-w-[120px] truncate text-neutral-300 md:max-w-[200px]">
                {next.meta.title}
                {next.meta.title}
                {next.meta.title}
              </p>
            </div>
            <span>
              <img
                src="/assets/images/icons/right-arrow.svg"
                alt="prev"
                className="h-[18px] w-[18px]"
              />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
