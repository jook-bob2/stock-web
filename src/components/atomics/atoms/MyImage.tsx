import React from 'react';
import Image, { ImageProps } from 'next/image';

export default function MyImage(props: ImageProps) {
  return (
    <Image
      priority={false}
      {...props}
    />
  );
}
