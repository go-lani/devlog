import { useRef } from 'react';

export default function useScrollLock() {
  const scrollRef = useRef(0);
  const $body = document.querySelector('body');

  const onScrollLock = () => {
    if ($body) {
      scrollRef.current = window.scrollY;

      $body.style.overflowY = 'hidden';
      $body.style.position = 'fixed';
      $body.style.top = `-${scrollRef.current}px`;
      $body.style.left = '0';
      $body.style.right = '0';
    }
  };

  const offScrollLock = () => {
    if ($body) {
      $body.style.removeProperty('overflow-y');
      $body.style.removeProperty('position');
      $body.style.removeProperty('top');
      $body.style.removeProperty('left');
      $body.style.removeProperty('right');
      window.scrollTo(0, scrollRef.current);
    }
  };

  return {
    onScrollLock,
    offScrollLock,
  };
}
