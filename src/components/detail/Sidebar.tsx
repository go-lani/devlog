'use client';

import { useRouter } from 'next/navigation';

import ShortProfile from '@/components/common/profile/ShortProfile';
import { Toc } from '@/utils/generateTocTree';

import TableOfContent from './TableOfContent';
import Tags from './Tags';

type Props = {
  toc: Toc[];
  tags: string[];
};

export default function Sidebar({ toc, tags }: Props) {
  const router = useRouter();
  return (
    <div className="border-style relative hidden w-[280px] shrink-0 border-r bg-zinc-800 lg:block">
      <div className="sticky top-0 bg-zinc-800">
        <div className="border-style px-4">
          <ShortProfile />
          <div className="border-style mx-[-1rem] border-b p-4">
            <button
              type="button"
              className="flex items-center gap-2 text-sm font-bold text-app-pink"
              onClick={() => router.back()}
            >
              <img
                src="/assets/images/icons/back.svg"
                alt="back"
                className="b-[15px] h-[15px]"
              />
              <p>go to back</p>
            </button>
          </div>
          <TableOfContent toc={toc} />
          <Tags tags={tags} />
        </div>
      </div>
    </div>
  );
}
