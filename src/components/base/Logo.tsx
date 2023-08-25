'use client';

import localFont from 'next/font/local';
import Link from 'next/link';
import { useState } from 'react';
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
    <h1 className="bg-black px-4 py-3 text-xl font-bold text-white transition-colors ease-in md:text-2xl">
      <Link href="/">
        <TypeAnimation
          preRenderFirstString
          sequence={['<Welcome! />', 1000, '<Lani.log />']}
          className={shareTechMono.className}
          cursor={false}
        />
      </Link>
    </h1>
  );
}
