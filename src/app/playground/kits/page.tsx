import { Metadata } from 'next';

import MDXViewer from '@/components/common/MDXViewer';
import ContentLayout from '@/components/playground/common/ContentLayout';
import KitPage from '@/components/playground/Kit';
import { getPackage } from '@/service/package';

export const metadata: Metadata = {
  title: {
    absolute: '@lani.ground/kits',
  },
  description: '@lani.ground/kits playground',
};

export default async function ReactPicker() {
  const content = await getPackage('kits');
  return (
    <ContentLayout packageName="kits">
      <MDXViewer serialized={content} components={{ KitPage }} isPackage />
    </ContentLayout>
  );
}
