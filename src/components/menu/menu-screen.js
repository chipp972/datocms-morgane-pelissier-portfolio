import React from 'react';
import propTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { LinkBloc } from './link-bloc';
import { menuData } from './menu-data';
import clsx from 'clsx';
import './menu-screen.css';
import { MenuButton } from './menu-button';
import { MenuFooter } from './menu-footer';
import { ProjectList } from './project-list';

export const MenuScreen = ({ isMenuVisible, setIsMenuVisible, ...props }) => (
  <>
    <MenuButton isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} />
    <div className={clsx('menu-screen', { displayed: isMenuVisible })}>
      <div className="main">
        {menuData.linkList.map((linkProps) => (
          <LinkBloc key={linkProps.href} {...linkProps} />
        ))}
        <ProjectList {...props} setIsMenuVisible={setIsMenuVisible} />
      </div>
      <MenuFooter />
    </div>
  </>
);

MenuScreen.propTypes = {
  currentProject: propTypes.string.isRequired,
  setCurrentProject: propTypes.func.isRequired,
  isMenuVisible: propTypes.bool.isRequired,
  setIsMenuVisible: propTypes.func.isRequired,
  setIsProjectDetailVisible: propTypes.func.isRequired
};
