import React from 'react';
import propTypes from 'prop-types';
import './scrolling-banner.css';

export const ScrollingBanner = ({ children, style }) => (
  <div className="scrolling-banner-container">
    <div style={style} className="scrolling-banner">
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
      {children}
    </div>
  </div>
);

ScrollingBanner.propTypes = {
  style: propTypes.object,
  children: propTypes.node.isRequired
};
