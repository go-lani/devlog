'use client';

import { useEffect, useRef, useState } from 'react';
import { OutSideClickHandler } from '@lani.ground/react-outside-click-handler';

type Props = {
  currentIndex: number;
  images: HTMLImageElement[];
  onCloseImgViewer: () => void;
} & React.ComponentProps<'div'>;

export default function ImgViewer({
  currentIndex,
  images,
  onCloseImgViewer,
  ...props
}: Props) {
  const currentImage = useRef<HTMLImageElement | null>(null);
  const imgViewer = useRef<HTMLDivElement | null>(null);

  const [scale, setScale] = useState(0);
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const [initialDistance, setInitialDistance] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [startDragPosition, setStartDragPosition] = useState({ x: 0, y: 0 });
  const [currentDragOffset, setCurrentDragOffset] = useState({ x: 0, y: 0 });

  const calculateDelta = (
    event: Touch | React.MouseEvent<HTMLImageElement>,
    initial: {
      x: number;
      y: number;
    },
  ) => ({
    x: event.clientX - initial.x,
    y: event.clientY - initial.y,
  });

  const dragHandlers = {
    onMouseDown: (e: React.MouseEvent<HTMLImageElement>) => {
      setIsDragging(true);
      setStartDragPosition({ x: e.clientX, y: e.clientY });
      setCurrentDragOffset(dragPosition);
    },
    onMouseMove: (e: React.MouseEvent<HTMLImageElement>) => {
      if (isDragging) {
        const delta = calculateDelta(e, startDragPosition);
        setDragPosition({
          x: delta.x + currentDragOffset.x,
          y: delta.y + currentDragOffset.y,
        });
      }
    },
    onMouseUp: () => setIsDragging(false),
    onTouchStart: (e: React.TouchEvent<HTMLImageElement>) => {
      if (e.touches.length === 1) {
        setIsDragging(true);
        setStartDragPosition({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        });
        setCurrentDragOffset(dragPosition);
      }
    },
    onTouchMove: (e: React.TouchEvent<HTMLImageElement>) => {
      if (isDragging && e.touches.length === 1) {
        const delta = calculateDelta(e.touches[0] as Touch, startDragPosition);
        setDragPosition({
          x: delta.x + currentDragOffset.x,
          y: delta.y + currentDragOffset.y,
        });
      }
    },
    onTouchEnd: () => setIsDragging(false),
  };

  const onMouseWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const deltaY = e.deltaY / 100;
    setScale((prevScale) => Math.min(Math.max(prevScale - deltaY, 0), 10));
  };

  useEffect(() => {
    if (!currentImage.current) return;

    const newScale = 1 + scale * 0.1;
    currentImage.current.style.transform = `translate(calc(-50% + ${dragPosition.x}px), calc(-50% + ${dragPosition.y}px)) scale(${newScale})`;
  }, [scale, dragPosition]);

  useEffect(() => {
    if (!imgViewer.current) return () => {};

    const getDistance = (e: TouchEvent): number => {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      return Math.sqrt(
        (touch2.pageX - touch1.pageX) ** 2 + (touch2.pageY - touch1.pageY) ** 2,
      );
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        setInitialDistance(getDistance(e));
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && initialDistance !== null) {
        const newDistance = getDistance(e);
        const diff = initialDistance - newDistance;

        setScale((prev) => {
          const newScale = prev - diff * 0.1;

          if (newScale > 10) return 10;

          return newScale < 1 ? 0 : newScale;
        });

        setInitialDistance(newDistance);
      }
    };

    imgViewer.current.addEventListener(
      'touchstart',
      handleTouchStart as EventListener,
      {
        passive: false,
      },
    );
    imgViewer.current.addEventListener(
      'touchmove',
      handleTouchMove as EventListener,
      {
        passive: false,
      },
    );

    return () => {
      imgViewer?.current?.removeEventListener(
        'touchstart',
        handleTouchStart as EventListener,
      );
      imgViewer?.current?.removeEventListener(
        'touchmove',
        handleTouchMove as EventListener,
      );
    };
  }, [initialDistance]);

  useEffect(() => {
    setDragPosition({ x: 0, y: 0 });
    setScale(0);
  }, [activeIndex]);

  useEffect(() => {
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    document.addEventListener('touchmove', preventZoom as EventListener, {
      passive: false,
    });

    return () => {
      document.removeEventListener('touchmove', preventZoom as EventListener);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-10 h-full w-full bg-neutral-900/[.8]"
      onWheel={onMouseWheel}
      ref={imgViewer}
      {...props}
    >
      <OutSideClickHandler onOutsideClick={onCloseImgViewer}>
        <>
          <img
            ref={currentImage}
            src={images[activeIndex].src}
            {...dragHandlers}
            alt=""
            className="absolute left-[50%] top-[50%] flex max-h-[100vh] max-w-full origin-center translate-x-[-50%] translate-y-[-50%] cursor-grabbing justify-center drag-none"
          />
          <div className="absolute bottom-0 mt-auto flex h-[20vh] w-full flex-col items-center justify-center py-2">
            <div>
              <button
                type="button"
                className="opacity-100 disabled:opacity-30"
                disabled={activeIndex === 0}
                onClick={() => setActiveIndex(activeIndex - 1)}
              >
                <img
                  src="/assets/images/icons/left-arrow-white.svg"
                  alt="이전"
                  className="w-[50px]"
                />
              </button>
              <button
                type="button"
                className="opacity-100 disabled:opacity-30"
                disabled={activeIndex + 1 === images.length}
                onClick={() => setActiveIndex(activeIndex + 1)}
              >
                <img
                  src="/assets/images/icons/right-arrow-white.svg"
                  alt="다음"
                  className="w-[50px]"
                />
              </button>
            </div>
            <div className="inline-block max-w-full overflow-x-auto overflow-y-hidden whitespace-nowrap px-4">
              {images.length > 0 &&
                images.map((image, index) => (
                  <button
                    type="button"
                    className="ml-4 first-of-type:ml-0"
                    key={image.src}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img
                      src={image.src}
                      alt=""
                      className={`h-[50px] w-[50px] border-2 object-cover md:h-[80px] md:w-[80px] ${
                        activeIndex === index
                          ? 'border-app-orange opacity-100'
                          : 'border-transparent opacity-70'
                      }`}
                    />
                  </button>
                ))}
            </div>
          </div>
        </>
      </OutSideClickHandler>
    </div>
  );
}
