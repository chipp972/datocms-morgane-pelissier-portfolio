import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './bubble.css';

export const Bubble = ({ style, onClick, isVisible, children, className }) => {
  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      style={style}
      onClick={onClick}
      className={clsx(
        'bubble',
        { 'bubble-visible': isVisible, 'magic-hover': !!onClick },
        className
      )}>
      {children}
    </Component>
  );
};

Bubble.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
  isVisible: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};
