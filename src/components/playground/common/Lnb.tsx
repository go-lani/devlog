'use client';

import localFont from 'next/font/local';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DiNpm } from 'react-icons/di';

const shareTechMono = localFont({
  src: [
    {
      path: '../../../../public/assets/fonts/ShareTechMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

const PLAYGROUND_LIST = [
  'react-image-viewer',
  'react-modal',
  'react-hooks',
  'react-outside-click-handler',
];

export default function Lnb() {
  const pathname = usePathname();

  return (
    <div className="md:border-style relative md:sticky md:top-0 md:border-b">
      <div
        className={`absolute top-[-4rem] flex h-[4rem] w-full items-center bg-neutral-900 ${shareTechMono.className} px-4 py-2 text-xl`}
      >
        <DiNpm size="3rem" color="rgb(203 3 3 / 80%)" />
        <p className="ml-4">@lani.ground</p>
      </div>
      <ul className="flex flex-col gap-2">
        {PLAYGROUND_LIST.map((list) => {
          return (
            <li key={list}>
              <Link
                href={`/playground/${list}`}
                className={`block text-sm md:text-base ${
                  pathname.includes(list) ? 'bg-[#A70707]' : ''
                } p-4`}
              >
                {list}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
