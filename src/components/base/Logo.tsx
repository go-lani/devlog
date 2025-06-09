'use client';

import localFont from 'next/font/local';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const shareTechMono = localFont({
  src: [
    {
      path: '../../../public/assets/fonts/ShareTechMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function Logo() {
  return (
    <p className="border-style border-r bg-neutral-900 text-xl font-bold text-app-white transition-colors ease-in lg:text-2xl">
      <Link href="/" className="block px-4 py-3">
        <TypeAnimation
          preRenderFirstString
          sequence={['<Welcome! />', 1000, '<Lani.log />']}
          className={shareTechMono.className}
          cursor={false}
        />
      </Link>
    </p>
  );
}
