import { Metadata } from 'next';
import OutsideClickHandlerPage from '@/components/playground/OutsideClickHandler';

export const metadata: Metadata = {
  title: '@lani.ground/react-outside-click-handler',
  description: '@lani.ground/react-outside-click-handler playground',
};

export default function ReactOutsideClickHandler() {
  return <OutsideClickHandlerPage />;
}
