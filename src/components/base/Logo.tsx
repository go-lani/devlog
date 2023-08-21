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
  const [isFinished, setIsFinished] = useState(false);
  return (
    <h1
      className={`${
        isFinished ? 'bg-black text-white' : 'light-mode-bg text-zinc-800'
      } p-6 font-bold text-4xl border-r-2 border-style ease-in transition-colors`}
    >
      <Link href="/">
        <TypeAnimation
          preRenderFirstString
          sequence={[
            '<Welcome! />',
            1000,
            '<Lani.log />',
            () => setIsFinished(true),
          ]}
          className={shareTechMono.className}
          cursor={false}
        />
      </Link>
    </h1>
  );
}
