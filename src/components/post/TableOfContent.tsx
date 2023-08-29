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
      <p className="font-bold text-white">table of contents</p>
      <ul className="mt-2 flex max-h-[400px] flex-col gap-2 overflow-y-auto overflow-x-hidden text-neutral-500">
        {toc.map((t) => (
          <li key={`${t.level}-${t.title}`}>
            <Link href={`${pathname}${t.href}`} replace>
              {t.title}
            </Link>
            {t.children && (
              <ul className="mt-2 flex flex-col gap-2 pl-4">
                {t.children.map((depth2) => (
                  <li>
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
