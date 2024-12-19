import { Metadata } from 'next';

import MDXViewer from '@/components/common/MDXViewer';
import ContentLayout from '@/components/playground/common/ContentLayout';
import ModalPage from '@/components/playground/Modal';
import { getPackage } from '@/service/package';

export const metadata: Metadata = {
  title: {
    absolute: '@lani.ground/react-modal',
  },
  description: '@lani.ground/react-modal playground',
};

export default async function ReactModal() {
  const content = await getPackage('react-modal');
  return (
    <ContentLayout packageName="react-modal">
      <MDXViewer serialized={content} components={{ ModalPage }} isPackage />
    </ContentLayout>
  );
}
