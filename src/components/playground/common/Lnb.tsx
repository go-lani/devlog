'use client';

import localFont from 'next/font/local';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

const shareTechMono = localFont({
  src: [
    {
      path: '../../../../public/assets/fonts/ShareTechMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

const NAVIGATION_CONFIG = {
  '/react-image-viewer': {
    icon: '🖼️',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
    hoverColor: 'hover:bg-orange-500/20',
    activeColor: 'bg-orange-600',
    children: [],
  },
  '/react-outside-click-handler': {
    icon: '👆',
    color: 'from-violet-500 to-indigo-500',
    bgColor: 'bg-violet-500/10',
    hoverColor: 'hover:bg-violet-500/20',
    activeColor: 'bg-violet-600',
    children: [],
  },
  '/react-hooks': {
    icon: '🎣',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    hoverColor: 'hover:bg-emerald-500/20',
    activeColor: 'bg-emerald-600',
    children: [],
  },
  '/react-modal': {
    icon: '🪟',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    hoverColor: 'hover:bg-purple-500/20',
    activeColor: 'bg-purple-600',
    children: [],
  },
  '/react-picker': {
    icon: '📅',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    hoverColor: 'hover:bg-blue-500/20',
    activeColor: 'bg-blue-600',
    children: [
      '/react-picker/date',
      '/react-picker/range',
      '/react-picker/datetime',
      '/react-picker/time',
      '/react-picker/custom',
    ],
  },
  '/kits': {
    icon: '🧰',
    color: 'from-amber-500 to-yellow-500',
    bgColor: 'bg-amber-500/10',
    hoverColor: 'hover:bg-amber-500/20',
    activeColor: 'bg-amber-600',
    children: [
      '/kits/date',
      '/kits/number',
      '/kits/string',
      '/kits/object',
      '/kits/validate',
      '/kits/cookie',
    ],
  },
} as const;

interface ComponentItem {
  path: string;
  children: ComponentItem[];
  icon: string;
  color: string;
  bgColor: string;
  hoverColor: string;
  activeColor: string;
}

export default function Lnb() {
  const pathname = usePathname();

  const getInitialExpandedItems = () => {
    const expandedSet = new Set<string>();

    Object.entries(NAVIGATION_CONFIG).forEach(([path, config]) => {
      config.children.forEach((childPath) => {
        const fullChildPath = `/playground${childPath}`;
        if (pathname === fullChildPath) {
          expandedSet.add(`/playground${path}`);
        }
      });
    });

    // 기본적으로 확장할 항목들 제거 - 모든 메뉴가 기본적으로 닫혀있음
    // expandedSet.add('/playground/react-picker');
    // expandedSet.add('/playground/kits');

    return expandedSet;
  };

  const [expandedItems, setExpandedItems] = useState<Set<string>>(() => {
    return getInitialExpandedItems();
  });

  // 사용자가 수동으로 접은 항목들을 추적
  const [manuallyCollapsed, setManuallyCollapsed] = useState<Set<string>>(
    new Set(),
  );

  const toggleExpanded = (path: string) => {
    const fullPath = `/playground${path}`;
    const newExpanded = new Set(expandedItems);
    const newCollapsed = new Set(manuallyCollapsed);

    if (newExpanded.has(fullPath)) {
      newExpanded.delete(fullPath);
      newCollapsed.add(fullPath); // 수동으로 접은 것으로 기록
    } else {
      newExpanded.add(fullPath);
      newCollapsed.delete(fullPath); // 수동으로 접은 기록 제거
    }

    setExpandedItems(newExpanded);
    setManuallyCollapsed(newCollapsed);
  };

  useEffect(() => {
    // 현재 pathname에 해당하는 부모를 찾아서 확장 상태에 추가
    setExpandedItems((prev) => {
      const newExpanded = new Set(prev);

      Object.entries(NAVIGATION_CONFIG).forEach(([path, config]) => {
        config.children.forEach((childPath) => {
          const fullChildPath = `/playground${childPath}`;
          if (pathname === fullChildPath) {
            newExpanded.add(`/playground${path}`);
          }
        });
      });

      return newExpanded;
    });
  }, [pathname]);

  const organizedComponents = useMemo(() => {
    return Object.entries(NAVIGATION_CONFIG).map(([path, config]) => ({
      path,
      children: config.children.map((childPath) => ({
        path: childPath,
        children: [],
        icon: config.icon,
        color: config.color,
        bgColor: config.bgColor,
        hoverColor: config.hoverColor,
        activeColor: config.activeColor,
      })),
      icon: config.icon,
      color: config.color,
      bgColor: config.bgColor,
      hoverColor: config.hoverColor,
      activeColor: config.activeColor,
    }));
  }, []);

  const isActive = (path: string) => pathname === `/playground${path}`;
  const isParentActive = (parentPath: string, children: ComponentItem[]) => {
    return children.some((child) => pathname === `/playground${child.path}`);
  };

  return (
    <div className="lg:border-style relative lg:sticky">
      <div
        className={`w-full bg-neutral-900 ${shareTechMono.className} space-y-4 text-xl`}
      >
        <Link
          href="/playground"
          className="mb-6 flex items-center rounded-xl border border-neutral-700/50 bg-gradient-to-br from-neutral-800/30 to-neutral-900/50 p-4 backdrop-blur-sm"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg">
            <span className="text-2xl">
              <img src="/assets/images/character.webp" alt="lani" width={38} />
            </span>
          </div>
          <div className="ml-4">
            <p className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-lg font-bold text-transparent">
              @lani.ground
            </p>
            <p className="text-xs text-gray-400">컴포넌트 라이브러리</p>
          </div>
        </Link>
      </div>

      <div className="space-y-2">
        <ul className="space-y-2">
          {organizedComponents.map((component) => {
            const hasChildren =
              component.children && component.children.length > 0;
            const fullPath = `/playground${component.path}`;
            const isExpanded =
              expandedItems.has(fullPath) ||
              (isActive(component.path) &&
                hasChildren &&
                !manuallyCollapsed.has(fullPath)); // 수동으로 접은 항목은 자동 확장 안함
            const isParentActiveState =
              hasChildren && isParentActive(component.path, component.children);

            return (
              <li key={component.path}>
                <div className="flex items-center">
                  <Link
                    href={`/playground${component.path}`}
                    className={`group flex flex-1 items-center gap-3 rounded-xl border border-transparent px-3 py-3 transition-all duration-200 ${(() => {
                      if (isActive(component.path)) {
                        return `border-neutral-600 ${component.activeColor} text-white shadow-lg`;
                      }
                      if (isParentActiveState) {
                        return `${component.bgColor} border-neutral-700/50 text-white`;
                      }
                      return `hover:border-neutral-700/50 ${component.hoverColor} text-gray-300 hover:text-white`;
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
                      {component.icon}
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
                        className={`h-2 w-2 rounded-full bg-gradient-to-r ${component.color}`}
                      />
                    )}
                  </Link>
                  {/* 확장/축소 버튼 */}
                  {hasChildren && (
                    <button
                      type="button"
                      onClick={() => toggleExpanded(component.path)}
                      className="ml-2 rounded-lg p-2 text-gray-400 transition-colors hover:bg-neutral-700/50 hover:text-white"
                    >
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          isExpanded ? 'rotate-90' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {hasChildren && isExpanded && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {component.children.map((child) => {
                      return (
                        <li key={child.path}>
                          <Link
                            href={`/playground${child.path}`}
                            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all duration-200 ${
                              isActive(child.path)
                                ? `${component.activeColor} text-white`
                                : `text-gray-400 hover:text-white ${component.hoverColor}`
                            }`}
                          >
                            <span className="text-gray-500">└</span>
                            <span className="capitalize">
                              {child.path.split('/').pop()}
                            </span>
                            {isActive(child.path) && (
                              <div
                                className={`ml-auto h-1.5 w-1.5 rounded-full bg-gradient-to-r ${component.color}`}
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

      <Link
        href="/"
        className="mt-4 flex items-center rounded-xl border border-neutral-700/50 bg-gradient-to-br from-neutral-800/30 to-neutral-900/50 p-4 backdrop-blur-sm transition-all duration-200 hover:border-neutral-600/50"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gray-700 to-gray-800">
          <span className="text-lg">
            <img src="/assets/images/icons/transition.svg" alt="" />
          </span>
        </div>
        <div className="ml-6">
          <p className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-lg font-bold text-transparent">
            &lt;Lani.log/&gt;
          </p>
          <p className="text-xs text-gray-400">바로가기</p>
        </div>
      </Link>
    </div>
  );
}
