'use client';
import { Toc } from '@/utils/generateTocTree';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  toc: Toc[];
};

export default function TableOfContent({ toc }: Props) {
  const pathname = usePathname();
  return (
    <div className="mx-[-1rem] p-4 text-sm">
      <p className="font-bold text-app-white">table of contents</p>
      <ul className="mt-2 flex max-h-[400px] flex-col gap-2 overflow-y-auto overflow-x-hidden text-neutral-500">
        {toc.map((depth1) => (
          <li key={`${depth1.level}-${depth1.title}`}>
            <Link href={`${pathname}${depth1.href}`} replace>
              {depth1.title}
            </Link>
            {depth1.children && (
              <ul className="mt-2 flex flex-col gap-2 pl-4">
                {depth1.children.map((depth2) => (
                  <li key={`${depth2.level}-${depth2.title}`}>
                    <Link href={`${pathname}${depth2.href}`} replace>
                      {depth2.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
