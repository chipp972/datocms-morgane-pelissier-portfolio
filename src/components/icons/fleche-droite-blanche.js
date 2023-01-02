import React from 'react';
import propTypes from 'prop-types';
import './icon.css';

export const RightArrow = ({ style }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 7 10"
    width={7}
    height={10}
    xmlSpace="preserve"
    style={style}>
    <g transform="translate(-1194.000000, -75.000000)">
      <g transform="translate(1194.000000, 75.000000)">
        <path className="st0" d="M7,5C3.7,5,1,2.8,1,0" />
        <path className="st0" d="M7,5c-3.3,0-6,2.2-6,5" />
      </g>
    </g>
  </svg>
);

RightArrow.propTypes = {
  style: propTypes.object
};
