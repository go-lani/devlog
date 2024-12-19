import Link from 'next/link';

import { Meta } from '@/types/post';

type Props = {
  type: 'Posts' | 'Snippet';
  prev: Meta | null;
  next: Meta | null;
};

export default function PageNavigator({ type = 'Posts', next, prev }: Props) {
  const typePath = type.toLocaleLowerCase();
  return (
    <div className="flex-between border-style mt-auto flex border-t bg-zinc-800 text-app-white">
      <div className="border-style flex w-[50%] p-4">
        {prev && (
          <Link href={`/${typePath}/${prev.path}`} className="flex gap-4">
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
                {prev.title}
                {prev.title}
                {prev.title}
              </p>
            </div>
          </Link>
        )}
      </div>
      <div className="flex w-[50%] justify-end p-4">
        {next && (
          <Link href={`/${typePath}/${next.path}`} className="flex gap-4">
            <div className="flex flex-col items-end gap-1">
              <p className="text-sm text-neutral-500">next</p>
              <p className="max-w-[120px] truncate text-neutral-300 md:max-w-[200px]">
                {next.title}
                {next.title}
                {next.title}
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
