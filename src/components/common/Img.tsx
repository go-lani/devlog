import { ImgHTMLAttributes, useCallback, useEffect, useState } from 'react';

export default function Img({
  src,
  className,
  alt,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [imageUrl, setImageUrl] = useState(null);

  const setBaseUrl = useCallback(() => {
    fetch(src!)
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.base64Image);
      })
      .catch((error) => console.error(error));
  }, [src]);

  useEffect(() => {
    setBaseUrl();
  }, [setBaseUrl]);

  return (
    imageUrl && <img {...rest} src={imageUrl} className={className} alt={alt} />
  );
}
