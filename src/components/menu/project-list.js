import React from 'react';
import propTypes from 'prop-types';
import { projectData } from '../../project-data';
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
      {projectData.projectList.map(({ id, name, position }) => (
        <li key={id} className="magic-hover">
          <button
            className={clsx('project-button', { current: currentProject === position })}
            onClick={() => {
              setIsMenuVisible(false);
              setCurrentProject(position);
              // TODO: Maybe add a timeout to let the scrolling animation execute
              setIsProjectDetailVisible(true);
            }}>
            <img
              className={clsx('menu-arrow', { displayed: currentProject === position })}
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
  currentProject: propTypes.number.isRequired,
  setCurrentProject: propTypes.func.isRequired,
  setIsMenuVisible: propTypes.func.isRequired,
  setIsProjectDetailVisible: propTypes.func.isRequired
};
