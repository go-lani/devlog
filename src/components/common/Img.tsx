'use client';

import { ImgHTMLAttributes, useEffect, useState } from 'react';

export default function Img({
  src,
  className,
  alt,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch(src!)
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.base64Image);
      })
      .catch((error) => console.error(error));
  }, [src]);

  if (!imageUrl) {
    return <div>Loading...</div>;
  }

  return <img {...rest} src={imageUrl} className={className} alt={alt} />;
}
