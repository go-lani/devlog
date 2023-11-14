import { Metadata } from 'next';
import ImageViewerPage from '@/components/playground/ImageVIewer';

export const metadata: Metadata = {
  title: '@lani.ground/react-image-viewer',
  description: '@lani.ground/react-image-viewer playground',
};

export default function ReactImageViewer() {
  return <ImageViewerPage />;
}
