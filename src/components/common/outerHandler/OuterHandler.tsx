'use client';

import { useEffect, useRef } from 'react';

type Props = { onOutsideClick: () => void; children: JSX.Element };

export default function OuterHandler({ onOutsideClick, children }: Props) {
  const $outerHandlerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!$outerHandlerRef.current) return undefined;

    const outsideClickHandler = (e: MouseEvent) => {
      if (
        !$outerHandlerRef.current ||
        $outerHandlerRef.current.contains(e.target as Node)
      )
        return;

      onOutsideClick();
    };

    document.addEventListener('click', outsideClickHandler);

    return () => {
      document.removeEventListener('click', outsideClickHandler);
    };
  }, [onOutsideClick]);

  return <div ref={$outerHandlerRef}>{children}</div>;
}
