/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

interface Props {
  position: Number;
}

export default function ImageIcons(props: Props) {
  return (
    <img
      src="https://img.wine.com.br/fenix/image/_big_bang/icons/header-sprite.svg"
      style={{
        position: 'relative',
        right: `${props.position}px`,
      }}
    />
  );
}
