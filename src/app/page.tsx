import Image from 'next/image';

export default function App() {
  return (
    <>
      <section className="container-layout border-style border-b-2">
        <div className="flex justify-center content-layout border-x-2 border-style">
          <Image
            src="/assets/images/character.png"
            width={250}
            height={250}
            alt=""
            className="border-x-2 border-style"
          />
        </div>
      </section>
      <section className="flex w-full justify-center h-screen bg-white">
        <div className="content-layout border-x-2 border-style">
          <p>next content</p>
        </div>
      </section>
    </>
  );
}
