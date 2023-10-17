import { useCallback, useRef } from 'react';

type CSSProperties = {
  [key: string]: string | number;
};

export default function useScrollLock() {
  const scrollRef = useRef(0);
  const $body = document.querySelector('body');

  const modifyBodyStyle = useCallback(
    (style: CSSProperties) => {
      if ($body) {
        Object.assign($body.style, style);
      } else {
        console.error('document.body is not defined');
      }
    },
    [$body],
  );

  const lockScroll = () => {
    scrollRef.current = window.scrollY;
    modifyBodyStyle({
      overflowY: 'hidden',
      position: 'fixed',
      top: `-${scrollRef.current}px`,
      left: '0',
      right: '0',
    });
  };

  const unlockScroll = () => {
    modifyBodyStyle({
      overflowY: '',
      position: '',
      top: '',
      left: '',
      right: '',
    });

    window.scrollTo({ left: 0, top: scrollRef.current, behavior: 'instant' });
  };

  return {
    lockScroll,
    unlockScroll,
  };
}
