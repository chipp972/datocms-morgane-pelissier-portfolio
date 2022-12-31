import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './separator.css';

export const HorizontalSeparator = ({ children, className, style }) => (
  <div style={style} className={clsx('horizontal-separator', className)}>
    <div className="bullet left" />
    <div className="bullet right" />
    {children}
  </div>
);

HorizontalSeparator.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
};
