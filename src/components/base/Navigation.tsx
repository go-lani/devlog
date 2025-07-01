'use client';

import { useModal } from '@lani.ground/react-modal';
import localFont from 'next/font/local';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { MENU } from '@/constants/app';

import '@lani.ground/react-modal/css';
import InstallPrompt from '../common/InstallPrompt';

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
  const { open, close, isOpen } = useModal();
  const [showInstallPrompt, setShowInstallPrompt] = useState<boolean>(false);
  const [isStandalone, setIsStandalone] = useState<boolean>(true);

  const MODAL_NAMES = {
    MOBILE_MENU: 'mobile-menu',
  };

  useEffect(() => {
    const checkIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

    if (checkIOS) {
      setIsStandalone(false);
      return;
    }

    const checkStandalone = window.matchMedia(
      '(display-mode: standalone)',
    ).matches;

    if (checkStandalone) {
      setIsStandalone(true);
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setIsStandalone(false);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const openMobileMenu = () => {
    open({
      name: MODAL_NAMES.MOBILE_MENU,
      component: (closeModal) => <MobileNavigation closeModal={closeModal} />,
    });
  };

  return (
    <>
      <div className="flex h-full items-center gap-2">
        {/* //! IOS 동작 이상 무조건 떠야함!!!! */}
        {!isStandalone && (
          <button
            type="button"
            onClick={() => {
              setShowInstallPrompt(true);
            }}
            className="flex h-auto items-center gap-1.5 rounded-full bg-neutral-900/50 px-3 py-1.5 text-xs text-app-white/80 transition-colors ease-in hover:bg-neutral-900 hover:text-app-white"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Install
          </button>
        )}
        <div className="border-style flex h-full items-center border-l lg:hidden">
          <button
            type="button"
            className="flex h-full items-center rounded-3xl bg-neutral-900 px-4 text-base text-app-white transition-colors"
            onClick={openMobileMenu}
          >
            menu
          </button>
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
              <img
                src="/assets/images/icons/transition.svg"
                alt=""
                width={16}
              />
              @lani.ground
            </Link>
          </li>
        </ul>
      </div>
      <InstallPrompt
        isOpen={showInstallPrompt}
        onClose={() => {
          setShowInstallPrompt(false);
        }}
      />
    </>
  );
}
