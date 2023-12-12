'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Modal } from '@lani.ground/react-modal';
import { MENU } from '@/constants/app';
import MobileNavigation from './MobileNavigation';
import '@lani.ground/react-modal/css';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <div className="border-style flex h-full items-center border-l md:hidden">
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
      <ul className="hidden h-full md:flex">
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
      </ul>
    </>
  );
}
