import Link from 'next/link';
import { headers } from 'next/headers';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Not Found',
  description: '페이지를 찾을 수 없습니다.',
};

export default async function NotFound() {
  const headersList = headers();
  const domain = headersList.get('host');
  console.log('headersList', headersList);
  return (
    <div>
      <h2>Not Found: </h2>
      <p>Could not find requested resource!!?</p>
    </div>
  );
}
