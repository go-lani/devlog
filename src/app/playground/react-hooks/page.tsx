import { Metadata } from 'next';
import HooksPage from '@/components/playground/Hooks';
import { getPackage } from '@/service/package';
import ContentLayout from '@/components/playground/common/ContentLayout';
import MDXViewer from '@/components/common/MDXViewer';

export const metadata: Metadata = {
  title: {
    absolute: '@lani.ground/react-hooks',
  },
  description: '@lani.ground/react-hooks playground',
};

export default async function ReactHooks() {
  const content = await getPackage('react-hooks');
  return (
    <ContentLayout packageName="react-hooks">
      <MDXViewer serialized={content} components={{ HooksPage }} isPackage />
    </ContentLayout>
  );
}
