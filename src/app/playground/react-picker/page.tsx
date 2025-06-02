import { Metadata } from 'next';

import MDXViewer from '@/components/common/MDXViewer';
import ContentLayout from '@/components/playground/common/ContentLayout';
import PickerPage from '@/components/playground/Picker';
import { getPackage } from '@/service/package';

export const metadata: Metadata = {
  title: {
    absolute: '@lani.ground/react-picker',
  },
  description: '@lani.ground/react-picker playground',
};

export default async function ReactPicker() {
  const content = await getPackage('react-picker');
  return (
    <ContentLayout packageName="react-picker">
      <MDXViewer serialized={content} components={{ PickerPage }} isPackage />
    </ContentLayout>
  );
}
