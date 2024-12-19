import { Metadata } from 'next';

import ListPage from '@/components/list/ListPage';
import { getPostMetaList, getTags } from '@/service/posts';

export const metadata: Metadata = {
  title: 'Snippet',
  description: `Lani's Snippet`,
};

export default async function Snippet() {
  const postMetas = await getPostMetaList('Snippet');
  const tags = await getTags(postMetas);
  return <ListPage category="Snippet" postMetas={postMetas} tags={tags} />;
}
