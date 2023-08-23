import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPostSeries } from '@/service/posts';

export const metadata: Metadata = {
  title: 'devlog - series',
  description: "lani's devlog",
};

export default async function Series() {
  const series = await getAllPostSeries();
  return (
    <section className="container-layout">
      <div className="content-layout border-style border-x">
        <ul>
          {series.map((aSeries) => (
            <li>
              <Link href={`/series/${aSeries}`}>{aSeries}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
