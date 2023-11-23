import { Metadata } from 'next';
import { getPostMetaList, getTags } from '@/service/posts';
import ListPage from '@/components/list/ListPage';

export const metadata: Metadata = {
  title: 'Posts',
  description: "Lani's devlog Posts",
};

export default async function Posts() {
  const postMetas = await getPostMetaList('Posts');
  const tags = await getTags(postMetas);

  return <ListPage category="Posts" tags={tags} postMetas={postMetas} />;
}
