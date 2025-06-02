import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import CustomPickerPage from '@/components/playground/picker/CustomPickerPage';
import DatePickerPage from '@/components/playground/picker/DatePickerPage';
import DateTimePickerPage from '@/components/playground/picker/DateTimePickerPage';
import RangePickerPage from '@/components/playground/picker/RangePickerPage';
import TimePickerPage from '@/components/playground/picker/TimePickerPage';

// 유효한 하위 페이지들 정의
const validSubPages = ['date', 'range', 'datetime', 'time', 'custom'];

const subPageInfo = {
  date: {
    title: '@lani.ground/react-picker/date',
    description: 'Date picker component playground',
    component: <DatePickerPage />,
  },
  range: {
    title: '@lani.ground/react-picker/range',
    description: 'Date range picker component playground',
    component: <RangePickerPage />,
  },
  datetime: {
    title: '@lani.ground/react-picker/datetime',
    description: 'DateTime picker component playground',
    component: <DateTimePickerPage />,
  },
  time: {
    title: '@lani.ground/react-picker/time',
    description: 'Time picker component playground',
    component: <TimePickerPage />,
  },
  custom: {
    title: '@lani.ground/react-picker/custom',
    description: 'Custom picker component playground',
    component: <CustomPickerPage />,
  },
};

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  if (!validSubPages.includes(slug)) {
    return {
      title: 'Page Not Found',
    };
  }

  const info = subPageInfo[slug as keyof typeof subPageInfo];

  return {
    title: {
      absolute: info.title,
    },
    description: info.description,
  };
}

export default function ReactPickerSubPage({ params }: Props) {
  const { slug } = params;

  // 유효하지 않은 slug인 경우 404 처리
  if (!validSubPages.includes(slug)) {
    notFound();
  }

  const info = subPageInfo[slug as keyof typeof subPageInfo];

  return info.component;
}

// 정적 생성을 위한 경로들
export function generateStaticParams() {
  return validSubPages.map((slug) => ({
    slug,
  }));
}
