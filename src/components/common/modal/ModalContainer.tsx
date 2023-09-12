'use client';

import { useEffect, useRef } from 'react';
import useScrollLock from '@/hooks/useScrollLock';

interface Props {
  hasDim: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

export default function ModalContainer({
  hasDim,
  closeModal,
  children,
}: Props) {
  const { onScrollLock, offScrollLock } = useScrollLock();
  const $modalContents = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onScrollLock();

    return () => {
      offScrollLock();
    };
  }, []);

  useEffect(() => {
    const outsideClickHandler = (e: MouseEvent) => {
      if (!hasDim) return;
      if (!$modalContents.current) return;
      if (!$modalContents.current.contains(e.target as Node)) {
        closeModal();
      }
    };
    document.addEventListener('click', outsideClickHandler);

    return () => {
      document.removeEventListener('click', outsideClickHandler);
    };
  }, [closeModal, hasDim]);

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex h-full w-full justify-center ${
        hasDim && 'bg-black bg-opacity-50'
      }`}
    >
      <div ref={$modalContents} className="overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
