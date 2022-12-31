import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './bubble.css';

export const Bubble = ({ onClick, isVisible, children, className }) => {
  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      onClick={onClick}
      className={clsx('bubble', { 'bubble-visible': isVisible }, className)}
    >
      {children}
    </Component>
  );
};

Bubble.propTypes = {
  onClick: PropTypes.func,
  isVisible: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};
