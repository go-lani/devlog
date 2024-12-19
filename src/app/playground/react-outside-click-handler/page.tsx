import { Metadata } from 'next';

import MDXViewer from '@/components/common/MDXViewer';
import ContentLayout from '@/components/playground/common/ContentLayout';
import OutsideClickHandlerPage from '@/components/playground/OutsideClickHandler';
import { getPackage } from '@/service/package';

export const metadata: Metadata = {
  title: {
    absolute: '@lani.ground/react-outside-click-handler',
  },
  description: '@lani.ground/react-outside-click-handler playground',
};

export default async function ReactOutsideClickHandler() {
  const content = await getPackage('react-outside-click-handler');
  return (
    <ContentLayout packageName="react-outside-click-handler">
      <MDXViewer
        serialized={content}
        components={{ OutsideClickHandlerPage }}
        isPackage
      />
    </ContentLayout>
  );
}
