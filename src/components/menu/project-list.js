import React from 'react';
import propTypes from 'prop-types';
import { menuData } from './menu-data';
import clsx from 'clsx';
import './project-list.css';

export const ProjectList = ({
  currentProject,
  setCurrentProject,
  setIsMenuVisible,
  setIsProjectDetailVisible
}) => (
  <section className="projects-col">
    <ul>
      {menuData.projectList.map(({ id, name }, index) => (
        <li
          key={name}
          // TODO: Remove index shit
          className={clsx('project-link', 'magic-hover', `project-${index + 1}`)}
        >
          <button
            className={clsx('project-button', { current: currentProject === id })}
            onClick={() => {
              setIsMenuVisible(false);
              setCurrentProject(id);
              // TODO: Maybe add a timeout to let the scrolling animation execute
              setIsProjectDetailVisible(true);
            }}
          >
            <img
              className={clsx('menu-arrow', { displayed: currentProject === id })}
              src="/img/icons/lien-jaune.svg"
              alt="Icon link to the right"
            />
            {name}
          </button>
        </li>
      ))}
    </ul>
  </section>
);

ProjectList.propTypes = {
  currentProject: propTypes.string.isRequired,
  setCurrentProject: propTypes.func.isRequired,
  setIsMenuVisible: propTypes.func.isRequired,
  setIsProjectDetailVisible: propTypes.func.isRequired
};
