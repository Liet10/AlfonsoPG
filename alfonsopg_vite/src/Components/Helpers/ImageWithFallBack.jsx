import React from 'react';

const ImageWithFallback = ({ src, srcWebP, alt, ...props }) => {
  return (
    <picture>
      <source srcSet={srcWebP} type="image/webp" />
      <img src={src} alt={alt} {...props} />
    </picture>
  );
};

export default ImageWithFallback;