'use client';

import { usePathname } from 'next/navigation';

import Lnb from '@/components/playground/common/Lnb';

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <main className="relative flex min-h-[100dvh] flex-col gap-[20px] bg-neutral-900 p-4 text-white md:flex-row md:items-start md:justify-center md:p-8">
      <nav className="mb-14 w-full md:sticky md:top-8 md:mb-0 md:mr-auto md:max-w-[320px]">
        <Lnb />
      </nav>
      <div className="mr-auto w-full md:max-w-[800px]">{children}</div>
    </main>
  );
}
