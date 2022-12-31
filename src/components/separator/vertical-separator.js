import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './separator.css';

export const VerticalSeparator = ({ children, className, style }) => (
  <div style={style} className={clsx('vertical-separator', className)}>
    <div className="bullet top" />
    <div className="bullet bottom" />
    {children}
  </div>
);

VerticalSeparator.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
};
