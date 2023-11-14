import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: '@lani.ground',
  },
  description: '@lani.ground playground',
};

export default function Playground() {
  return (
    <>
      <p className="text-2xl italic">Welcome !</p>
      <p className="mt-4 text-xl italic">@lani.ground Playground</p>
    </>
  );
}
