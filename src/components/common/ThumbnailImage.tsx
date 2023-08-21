'use client';

import { useEffect, useState } from 'react';

interface Props {
  className?: string;
  src: string;
  alt?: string;
}

export default function ThumbnailImage({ className, src, alt = '' }: Props) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Fetch the image data from the server
    fetch(src)
      .then((response) => response.json())
      .then((data) => setImageUrl(data.base64Image))
      .catch((error) => console.error(error));
  }, [src]);

  return imageUrl ? (
    <img src={imageUrl} className={className} alt={alt} />
  ) : (
    <div>Loading...</div>
  );
}
