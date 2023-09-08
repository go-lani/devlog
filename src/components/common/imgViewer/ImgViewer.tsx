'use client';

import OuterHandler from '../outerHandler/OuterHandler';

type Props = {
  images: HTMLImageElement[];
  onCloseImgViewer: () => void;
};

export default function ImgViewer({ images, onCloseImgViewer }: Props) {
  return (
    <div className="fixed left-0 top-0 z-10 h-full w-full bg-neutral-900/[.8]">
      <OuterHandler onOutsideClick={onCloseImgViewer}>
        <div className="absolute top-0 h-[300px] w-[300px] overflow-auto">
          {images.length > 0 &&
            images.map((image) => (
              <div key={image.src}>
                <img src={image.src} alt="" />
              </div>
            ))}
        </div>
      </OuterHandler>
    </div>
  );
}
