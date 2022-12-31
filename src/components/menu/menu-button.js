import React from 'react';
import clsx from 'clsx';
import propTypes from 'prop-types';
import './menu-button.css';

export const MenuButton = ({ isMenuVisible, setIsMenuVisible }) => (
  <button
    className={clsx('menu-btn-box', 'magic-hover', { close: isMenuVisible })}
    onClick={() => setIsMenuVisible((visibility) => !visibility)}
  >
    <div className="menu-html-icon" />
  </button>
);

MenuButton.propTypes = {
  isMenuVisible: propTypes.bool.isRequired,
  setIsMenuVisible: propTypes.func.isRequired
};
