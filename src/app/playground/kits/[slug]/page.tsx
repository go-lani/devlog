import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import CookieKitPage from '@/components/playground/kits/CookieKitPage';
import DateKitPage from '@/components/playground/kits/DateKitPage';
import NumberKitPage from '@/components/playground/kits/NumberKitPage';
import ObjectKitPage from '@/components/playground/kits/ObjectKitPage';
import StringKitPage from '@/components/playground/kits/StringKitPage';
import ValidateKitPage from '@/components/playground/kits/ValidateKitPage';

// 유효한 하위 페이지들 정의
const validSubPages = [
  'cookie',
  'date',
  'number',
  'object',
  'string',
  'validate',
];

const subPageInfo = {
  cookie: {
    title: '@lani.ground/kits/cookie',
    description: 'Cookie utility functions playground',
    component: <CookieKitPage />,
  },
  date: {
    title: '@lani.ground/kits/date',
    description: 'Date utility functions playground',
    component: <DateKitPage />,
  },
  number: {
    title: '@lani.ground/kits/number',
    description: 'Number utility functions playground',
    component: <NumberKitPage />,
  },
  object: {
    title: '@lani.ground/kits/object',
    description: 'Object utility functions playground',
    component: <ObjectKitPage />,
  },
  string: {
    title: '@lani.ground/kits/string',
    description: 'String utility functions playground',
    component: <StringKitPage />,
  },
  validate: {
    title: '@lani.ground/kits/validate',
    description: 'Validation utility functions playground',
    component: <ValidateKitPage />,
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

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

export default async function ReactPickerSubPage({ params }: Props) {
  const { slug } = await params;

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
