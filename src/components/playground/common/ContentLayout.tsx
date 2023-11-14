import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

interface Props {
  packageName: string;
  children: React.ReactNode;
}

export default function ContentLayout({ packageName, children }: Props) {
  return (
    <section className="w-full">
      <div className="border-style m-[-2rem] mb-8 flex flex-col border-b p-8">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold md:text-3xl">
            @lani.ground/{packageName}
          </h1>
          <Link
            href={`https://www.npmjs.com/package/@lani.ground/${packageName}`}
            target="_blank"
          >
            <FiExternalLink size="1.6rem" color="rgba(255,255,255,0.4)" />
          </Link>
        </div>

        <ul className="mt-4">
          <li>
            <img
              src={`https://img.shields.io/npm/v/%40lani.ground/${packageName}`}
              alt=""
            />
          </li>
        </ul>
      </div>
      {children}
    </section>
  );
}
