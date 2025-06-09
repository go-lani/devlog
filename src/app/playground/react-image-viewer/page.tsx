import { Metadata } from 'next';

import MdxViewer from '@/components/common/MDXViewer';
import ContentLayout from '@/components/playground/common/ContentLayout';
import ImageViewerPage from '@/components/playground/ImageVIewer';
import { getPackage } from '@/service/package';

export const metadata: Metadata = {
  title: {
    absolute: '@lani.ground/react-image-viewer',
  },
  description: '@lani.ground/react-image-viewer playground',
};

export default async function ReactImageViewer() {
  const content = await getPackage('react-image-viewer');

  return (
    <ContentLayout packageName="react-image-viewer">
      <MdxViewer
        serialized={content}
        components={{ ImageViewerPage }}
        isPackage
      />
    </ContentLayout>
  );
}
