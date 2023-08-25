'use client';

import { useEffect, useRef } from 'react';

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
  const $modalContents = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const $body = document.querySelector('body');
    if (!$body) return () => {};

    $body.style.overflowY = 'hidden';

    return () => {
      $body.style.overflowY = 'auto';
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
      className={`fixed left-0 top-0 z-50 flex h-full w-full justify-center overflow-y-auto ${
        hasDim && 'bg-black bg-opacity-50'
      }`}
    >
      <div ref={$modalContents} className="modal-contents">
        {children}
      </div>
    </div>
  );
}
