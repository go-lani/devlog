'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import ImgViewer from './ImgViewer';

type Props = {
  children: JSX.Element;
};

export default function ImgViewerProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState<Element | null>(null);

  const imgViewerProviderRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  const onCloseImgViewer = () => {
    const $body = document.querySelector('body');
    setIsOpen(false);
    $body!.style.overflowY = 'auto';
  };

  useEffect(() => {
    const $body = document.querySelector('body');
    if (!($body && imgViewerProviderRef.current)) return undefined;

    const images = Array.from(
      imgViewerProviderRef.current.querySelectorAll('img'),
    );

    const openViewer = (e: MouseEvent) => {
      e.stopPropagation();
      $body.style.overflowY = 'hidden';
      setIsOpen(true);
    };

    images.forEach((img) => {
      img.addEventListener('click', openViewer);
    });

    setImages(images);

    return () => {
      images.forEach((img) => {
        img.removeEventListener('click', openViewer);
      });
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const $body = document.querySelector('body');

    if (!$body) return undefined;

    const $imageViewerRoot = document.createElement('div');
    $imageViewerRoot.setAttribute('id', 'image-viewer-root');

    $body.appendChild($imageViewerRoot);

    setModalRoot($imageViewerRoot);
    return () => {
      $imageViewerRoot.remove();
    };
  }, []);

  return (
    <>
      <div ref={imgViewerProviderRef}>{children}</div>
      {isOpen &&
        modalRoot &&
        createPortal(
          <ImgViewer images={images} onCloseImgViewer={onCloseImgViewer} />,
          modalRoot,
        )}
    </>
  );
}
