import Image from 'next/image';

export default function App() {
  return (
    <>
      <section className="container-layout border-style border-b">
        <div className="content-layout border-style flex justify-center border-x">
          <Image
            src="/assets/images/character.png"
            width={250}
            height={250}
            alt=""
            className="border-style border-x"
          />
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
