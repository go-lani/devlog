import { Metadata } from 'next';
import HooksPage from '@/components/playground/Hooks';

export const metadata: Metadata = {
  title: {
    absolute: '@lani.ground/react-hooks',
  },
  description: '@lani.ground/react-hooks playground',
};

export default function ReactHooks() {
  return <HooksPage />;
}
