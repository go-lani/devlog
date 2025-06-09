'use client';

import Lnb from '@/components/playground/common/Lnb';

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex min-h-[100dvh] flex-col gap-[20px] bg-neutral-900 p-4 text-white lg:flex-row lg:items-start lg:justify-center lg:p-8">
      <nav className="mb-14 w-full lg:sticky lg:top-8 lg:mb-0 lg:mr-auto lg:max-w-[320px]">
        <Lnb />
      </nav>
      <div className="mr-auto w-full overflow-x-hidden lg:max-w-[800px]">
        {children}
      </div>
    </main>
  );
}
