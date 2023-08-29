'use client';

import { Toc } from '@/utils/generateTocTree';
import TableOfContent from './TableOfContent';
import Tags from './Tags';
import ShortProfile from '../common/profile/ShortProfile';
import { useRouter } from 'next/navigation';

type Props = {
  toc: Toc[];
  tags: string[];
};

export default function Sidebar({ toc, tags }: Props) {
  const router = useRouter();
  return (
    <div className="border-style relative hidden w-[280px] shrink-0 border-r lg:block">
      <div className="sticky top-0 bg-neutral-900">
        <div className="border-style px-4">
          <ShortProfile />
          <div className="border-style mx-[-1rem] border-b p-4">
            <button
              className="text-app-pink flex items-center gap-2 text-sm font-bold"
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
