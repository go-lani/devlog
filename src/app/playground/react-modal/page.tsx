import { Metadata } from 'next';
import ModalPage from '@/components/playground/Modal';

export const metadata: Metadata = {
  title: {
    absolute: '@lani.ground/react-modal',
  },
  description: '@lani.ground/react-modal playground',
};

export default function ReactModal() {
  return <ModalPage />;
}
