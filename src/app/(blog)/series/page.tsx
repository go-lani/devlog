import { Metadata } from 'next';
import { getSeriesList } from '@/service/posts';
import SeriesListPage from '@/components/list/SeriesListPage';

export const metadata: Metadata = {
  title: 'Series',
  description: "Lani's devlog Series",
};

export default async function Series() {
  const series = await getSeriesList();
  return <SeriesListPage series={series} />;
}
