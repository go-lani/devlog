import { Metadata } from 'next';
import { getAllPostSeries } from '@/service/posts';
import ListPage from '@/components/series/list/ListPage';

export const metadata: Metadata = {
  title: 'devlog - series',
  description: "lani's devlog",
};

export default async function Series() {
  const series = await getAllPostSeries();
  return <ListPage series={series} />;
}
