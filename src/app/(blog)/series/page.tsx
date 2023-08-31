import { Metadata } from 'next';
import { getAllPostSeries } from '@/service/posts';
import ListPage from '@/components/series/list/ListPage';

export const metadata: Metadata = {
  title: '시리즈',
  description: '라니의 시리즈 목록',
};

export default async function Series() {
  const series = await getAllPostSeries();
  return <ListPage series={series} />;
}
