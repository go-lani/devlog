'use client';

import { Modal } from '@lani.ground/react-modal';
import localFont from 'next/font/local';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { MENU } from '@/constants/app';

import '@lani.ground/react-modal/css';
import MobileNavigation from './MobileNavigation';

const shareTechMono = localFont({
  src: [
    {
      path: '../../../public/assets/fonts/ShareTechMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <div className="border-style flex h-full items-center border-l lg:hidden">
        <button
          type="button"
          className="flex h-full items-center rounded-3xl bg-neutral-900 px-4 text-base text-app-white transition-colors"
          onClick={() => setIsMenuOpen(true)}
        >
          menu
        </button>
        <Modal
          onClose={() => setIsMenuOpen(false)}
          component={(closeModal) => (
            <MobileNavigation closeModal={closeModal} />
          )}
          isOpen={isMenuOpen}
        />
      </div>
      <ul className="hidden h-full lg:flex">
        {MENU.map(({ href, title }) => (
          <li
            className="border-style flex h-full items-center border-l"
            key={href}
          >
            <Link
              href={href}
              className={`${
                pathname.includes(href) && 'bg-neutral-900'
              } border-style flex h-full items-center rounded-full border-x px-8 text-base text-app-white transition-colors ease-in`}
            >
              {title}
            </Link>
          </li>
        ))}
        <li className="border-style flex h-full items-center border-l">
          <Link
            href="/playground"
            className={`${shareTechMono.className} flex h-full items-center gap-2 px-4 text-base font-bold text-app-white ease-in`}
          >
            <img src="/assets/images/icons/transition.svg" alt="" width={16} />
            @lani.ground
          </Link>
        </li>
      </ul>
    </>
  );
}
