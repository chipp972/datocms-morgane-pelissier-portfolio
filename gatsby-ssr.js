import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/GalleryModern.otf"
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
      key="GalleryModern"
    />
  ])
}