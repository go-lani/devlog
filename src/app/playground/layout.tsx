import Lnb from '@/components/playground/common/Lnb';

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-full justify-center text-white">
      <div className="flex min-h-[100dvh] w-full flex-col md:flex-row">
        <nav className="border-style relative w-full shrink-0 justify-self-start border-b pt-16 md:mr-14 md:max-w-[300px] md:border-x md:py-16">
          <Lnb />
        </nav>
        <div className="border-style mx-auto w-full border-x p-8 md:max-w-[1024px]">
          {children}
        </div>
      </div>
    </main>
  );
}
