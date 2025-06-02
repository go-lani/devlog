'use client';

import localFont from 'next/font/local';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';

import { PACKAGES_CONFIG } from '@/constants/menu';

const shareTechMono = localFont({
  src: [
    {
      path: '../../../../public/assets/fonts/ShareTechMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

// 네비게이션을 위한 경로 정의
const NAVIGATION_PATHS = [
  '/react-image-viewer',
  '/react-outside-click-handler',
  '/react-hooks',
  '/react-modal',
  '/react-picker',
  '/react-picker/date',
  '/react-picker/range',
  '/react-picker/datetime',
  '/react-picker/time',
  '/react-picker/custom',
];

interface ComponentItem {
  path: string;
  children?: ComponentItem[];
}

export default function Lnb() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(['/playground/react-picker']),
  );

  // 패키지별 색상과 아이콘 매핑

  const organizedComponents = useMemo(() => {
    const organized: ComponentItem[] = [];
    const childrenMap: { [key: string]: ComponentItem[] } = {};

    // 먼저 모든 컴포넌트를 분류
    NAVIGATION_PATHS.forEach((path) => {
      const pathParts = path.split('/');
      if (pathParts.length === 2) {
        // 메인 패키지 (예: /react-picker)
        organized.push({
          path,
          children: [],
        });
      } else if (pathParts.length === 3) {
        // 하위 페이지 (예: /react-picker/date)
        const parentPath = `/${pathParts[1]}`;
        if (!childrenMap[parentPath]) {
          childrenMap[parentPath] = [];
        }
        childrenMap[parentPath].push({
          path,
        });
      }
    });

    // 자식들을 부모에게 연결
    organized.forEach((parent) => {
      if (childrenMap[parent.path]) {
        parent.children = childrenMap[parent.path];
      }
    });

    return organized;
  }, []);

  const isActive = (path: string) => pathname === `/playground${path}`;
  const isParentActive = (parentPath: string, children: ComponentItem[]) => {
    return children.some((child) => pathname === `/playground${child.path}`);
  };

  const getPackageStyle = (path: string) => {
    return (
      PACKAGES_CONFIG[path as keyof typeof PACKAGES_CONFIG] ||
      PACKAGES_CONFIG['/react-picker']
    );
  };

  return (
    <div className="md:border-style relative md:sticky">
      <div
        className={`w-full bg-neutral-900 ${shareTechMono.className} text-xl`}
      >
        <Link
          href="/playground"
          className="mb-6 flex items-center rounded-xl border border-neutral-700/50 bg-gradient-to-br from-neutral-800/30 to-neutral-900/50 p-4 backdrop-blur-sm"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-800">
            <span className="text-2xl">📦</span>
          </div>
          <div className="ml-4">
            <p className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-lg font-bold text-transparent">
              @lani.ground
            </p>
            <p className="text-xs text-gray-400">컴포넌트 라이브러리</p>
          </div>
        </Link>
      </div>

      {/* 네비게이션 목록 */}
      <div className="space-y-2">
        <ul className="space-y-2">
          {organizedComponents.map((component) => {
            const hasChildren =
              component.children && component.children.length > 0;
            const isExpanded = expandedItems.has(
              `/playground${component.path}`,
            );
            const isParentActiveState =
              hasChildren &&
              isParentActive(component.path, component.children!);
            const packageStyle = getPackageStyle(component.path);

            return (
              <li key={component.path}>
                <div className="flex items-center">
                  <Link
                    href={`/playground${component.path}`}
                    className={`group flex flex-1 items-center gap-3 rounded-xl border border-transparent px-3 py-3 transition-all duration-200 ${(() => {
                      if (isActive(component.path)) {
                        return `${packageStyle.activeColor} border-neutral-600 text-white shadow-lg`;
                      }
                      if (isParentActiveState) {
                        return `${packageStyle.bgColor} border-neutral-700/50 text-white`;
                      }
                      return `hover:border-neutral-700/50 ${packageStyle.hoverColor} text-gray-300 hover:text-white`;
                    })()}`}
                  >
                    {/* 아이콘 */}
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-lg transition-transform group-hover:scale-110 ${
                        isActive(component.path)
                          ? 'bg-white/20'
                          : 'bg-neutral-800/50'
                      }`}
                    >
                      {packageStyle.icon}
                    </div>

                    {/* 패키지명 */}
                    <div className="flex-1">
                      <div className="text-sm font-medium">
                        @lani.ground{component.path}
                      </div>
                    </div>

                    {/* 활성 상태 표시 */}
                    {(isActive(component.path) || isParentActiveState) && (
                      <div
                        className={`h-2 w-2 rounded-full bg-gradient-to-r ${packageStyle.color}`}
                      />
                    )}
                  </Link>
                </div>

                {hasChildren && isExpanded && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {component.children!.map((child) => {
                      const childStyle = getPackageStyle(component.path);
                      return (
                        <li key={child.path}>
                          <Link
                            href={`/playground${child.path}`}
                            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all duration-200 ${
                              isActive(child.path)
                                ? `${childStyle.activeColor} text-white`
                                : `text-gray-400 hover:text-white ${childStyle.hoverColor}`
                            }`}
                          >
                            <span className="text-gray-500">└</span>
                            <span className="capitalize">
                              {child.path.split('/').pop()}
                            </span>
                            {isActive(child.path) && (
                              <div
                                className={`ml-auto h-1.5 w-1.5 rounded-full bg-gradient-to-r ${childStyle.color}`}
                              />
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
