import Image from 'next/image';

export default function App() {
  return (
    <>
      <section className="container-layout border-style border-b bg-zinc-800">
        <div className="content-layout border-style flex justify-center border-x">
          <p>hello</p>
        </div>
      </section>
      <section className="flex h-screen w-full justify-center bg-white">
        <div className="content-layout border-style border-x">
          <p>next content</p>
        </div>
      </section>
    </>
  );
}
