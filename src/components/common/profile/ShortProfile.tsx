import Image from 'next/image';

export default function ShortProfile() {
  return (
    <div className="border-style mx-[-1rem] flex items-center border-b p-4">
      <div className="relative h-[40px] w-[40px] rounded-full border border-transparent bg-white">
        <Image src="/assets/images/character.webp" alt="lani" fill />
      </div>
      <p className="ml-4 text-white">developer Lani</p>
    </div>
  );
}
