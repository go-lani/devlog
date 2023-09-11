'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import useScrollLock from '@/hooks/useScrollLock';
import ImgViewer from './ImgViewer';

type Props = {
  children: JSX.Element;
} & React.ComponentProps<'div'>;

export default function ImgViewerProvider({ children, ...props }: Props) {
  const { onScrollLock, offScrollLock } = useScrollLock();
  const [isOpen, setIsOpen] = useState(false);
  const [modalRoot, setModalRoot] = useState<Element | null>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | undefined>();
  const imgViewerProviderRef = useRef<HTMLDivElement>(null);

  const onCloseImgViewer = () => {
    setIsOpen(false);
    offScrollLock();
  };

  const openImageViewer = (e: MouseEvent, index?: number) => {
    e.stopPropagation();

    setIsOpen(true);
    setCurrentIndex(index);
    onScrollLock();
  };

  useEffect(() => {
    if (!imgViewerProviderRef.current) return undefined;

    const $images = Array.from(
      imgViewerProviderRef.current.querySelectorAll('img'),
    );

    $images.forEach((img, index) => {
      img.addEventListener('click', (e) => openImageViewer(e, index));
    });

    setImages($images);

    return () => {
      $images.forEach((img) => {
        img.removeEventListener('click', openImageViewer);
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
          <ImgViewer
            {...props}
            images={images}
            currentIndex={currentIndex || 0}
            onCloseImgViewer={onCloseImgViewer}
          />,
          modalRoot,
        )}
    </>
  );
}
