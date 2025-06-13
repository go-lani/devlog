'use client';

import { cookieKit } from '@lani.ground/kits';
import { useEffect, useState } from 'react';

const HIDE_UNTIL_KEY = 'install-prompt-hide-until';

export default function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { getCookie, setCookie, deleteCookie } = cookieKit;

  useEffect(() => {
    const checkIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(checkIOS);

    // 설치여부 판단
    const checkStandalone = window.matchMedia(
      '(display-mode: standalone)',
    ).matches;
    setIsStandalone(checkStandalone);

    if (checkStandalone) {
      setIsVisible(false);
      return;
    }

    const hideUntil = getCookie(HIDE_UNTIL_KEY);
    if (hideUntil) {
      const decodedValue = decodeURIComponent(hideUntil);
      const hideUntilDate = new Date(decodedValue);
      const now = new Date();
      if (hideUntilDate > now) {
        setIsVisible(false);
        return;
      }
      deleteCookie(HIDE_UNTIL_KEY);
    }

    // iOS 환경에서는 standalone 체크를 하지 않고 바로 프롬프트를 보여줌
    if (checkIOS) {
      setIsVisible(true);
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('사용자가 앱 설치를 수락했습니다!');
    }

    setDeferredPrompt(null);
    setShowInstallButton(false);
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleHideForToday = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    setCookie(HIDE_UNTIL_KEY, tomorrow.toISOString(), {
      expires: tomorrow,
    });
    setIsVisible(false);
  };

  if (isStandalone) {
    return null;
  }

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-[9998]" onClick={handleClose} />
      )}
      <div
        className={`fixed left-1/2 top-4 w-full max-w-sm -translate-x-1/2 transform rounded-2xl border border-gray-900 bg-black/95 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.4)] backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-4 opacity-0'
        } z-[9999]`}
      >
        <div className="flex items-start">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              <svg
                className="h-5 w-5 text-blue-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-50">
                앱 설치하기
              </h3>
            </div>

            {!isIOS && showInstallButton && (
              <div className="space-y-3">
                <p className="text-sm text-gray-400">
                  더 나은 사용자 경험을 위해 앱을 설치해보세요!
                </p>
                <button
                  type="button"
                  onClick={handleInstallClick}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-800"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  홈 화면에 추가하기
                </button>
              </div>
            )}

            {isIOS && (
              <div className="space-y-3">
                <p className="text-sm text-gray-400">
                  iOS 기기에서 설치하려면:
                </p>
                <div className="space-y-2 rounded-xl bg-gray-900 p-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-800 text-xs">
                      1
                    </span>
                    <span className="flex items-center">
                      공유 버튼{' '}
                      <span className="mx-1 inline-block">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                          <polyline points="16 6 12 2 8 6" />
                          <line x1="12" y1="2" x2="12" y2="15" />
                        </svg>
                      </span>
                      클릭
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-800 text-xs">
                      2
                    </span>
                    <span className="flex items-center">
                      &quot;홈 화면에 추가&quot;{' '}
                      <span className="mx-1 inline-block">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <line x1="12" y1="8" x2="12" y2="16" />
                          <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                      </span>
                      선택
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="absolute right-4 top-4 flex gap-2">
          <button
            type="button"
            onClick={handleHideForToday}
            className="rounded-full bg-gray-900 px-3 py-1.5 text-xs text-gray-400 transition-colors hover:bg-gray-800 hover:text-gray-300"
          >
            오늘 하루 보지 않기
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-full bg-gray-900 p-1.5 text-gray-500 transition-colors hover:bg-gray-800 hover:text-gray-300"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
