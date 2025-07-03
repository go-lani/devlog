import { Metadata } from 'next';

import MDXViewer from '@/components/common/MDXViewer';
import ContentLayout from '@/components/playground/common/ContentLayout';
import DeviceDetectPage from '@/components/playground/DeviceDetector';
import { getPackage } from '@/service/package';

export const metadata: Metadata = {
  title: {
    absolute: '@lani.ground/react-device-detector',
  },
  description: '@lani.ground/react-device-detector playground',
};

export default async function DeviceDetector() {
  const content = await getPackage('react-device-detector');
  return (
    <ContentLayout packageName="react-device-detector">
      <MDXViewer
        serialized={content}
        components={{ DeviceDetectPage }}
        isPackage
      />
    </ContentLayout>
  );
}
