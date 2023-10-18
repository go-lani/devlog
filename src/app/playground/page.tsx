'use client';

import useVisibleOnScreen from '@/hooks/useVisibleOnScreen';

export default function Playground() {
  const { ref, activeKey, activeElement } = useVisibleOnScreen({
    activeClass: 'active',
  });
  console.log('activeKey', activeKey); // scroll-item-0
  console.log('activeElement', activeElement); // <section class="h-[100vh] bg-orange-300 p-8 active" data-key="scroll-item-0"><p>section 1</p></section>

  return (
    <>
      <main className="flex flex-col text-white">
        <h1 className="p-20 text-2xl">playgrousnd</h1>

        <div ref={ref}>
          <section className="h-[100vh] bg-orange-300 p-8">
            <p>section 1</p>
          </section>
          <section className="once h-[100vh] bg-emerald-600 p-8">
            <p>section 2</p>
          </section>
          <section className="h-[100vh] bg-violet-700 p-8">
            <p>section 3</p>
          </section>
          <section className="h-[100vh] bg-pink-700 p-8">
            <p>section 4</p>
          </section>
        </div>
      </main>
    </>
  );
}
