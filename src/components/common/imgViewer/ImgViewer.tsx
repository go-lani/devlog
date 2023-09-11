'use client';

import { useState } from 'react';
import OuterHandler from '../outerHandler/OuterHandler';

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
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  return (
    <div
      className="fixed left-0 top-0 z-10 h-full w-full bg-neutral-900/[.8]"
      {...props}
    >
      <OuterHandler onOutsideClick={onCloseImgViewer}>
        <>
          <img
            src={images[activeIndex].src}
            alt=""
            className="absolute left-[50%] top-[50%] flex max-h-[50vh] max-w-full translate-x-[-50%] translate-y-[-50%] justify-center lg:w-[742px]"
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
      </OuterHandler>
    </div>
  );
}
