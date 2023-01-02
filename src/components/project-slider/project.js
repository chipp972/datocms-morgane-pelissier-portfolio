import React from 'react';
import PropTypes from 'prop-types';
import { Bubble } from '../bubble/bubble';
import clsx from 'clsx';
import './project.css';
import { projectData } from '../../project-data';

export const Project = ({
  isProjectDetailVisible,
  setIsProjectDetailVisible,
  currentProject,
  setCurrentProject,
  id,
  name,
  position,
  date,
  overviewImage,
  href
}) => {
  const isCurrentProject = currentProject === position;
  return (
    <section className={clsx('project', { 'current-project': isCurrentProject })}>
      <Bubble className="project-number" isVisible={isCurrentProject && !isProjectDetailVisible}>
        {position + 1}
      </Bubble>
      <div
        className={clsx('project-image')}
        onClick={() => setIsProjectDetailVisible(true)}
        style={{
          backgroundImage: `url(${overviewImage})`,
          transform: isCurrentProject ? 'translateX(0)' : 'translateX(-14vw)'
        }}
      />
      <div className="project-info-container">
        <div className="project-info">
          <p style={{ opacity: isProjectDetailVisible ? 0 : 1 }} className="project-date">
            {date}
          </p>
          {isProjectDetailVisible && (
            <button
              style={{ visibility: isCurrentProject ? 'visible' : 'hidden' }}
              className={clsx('magic-hover', 'arrow-button')}
              type="button"
              onClick={() => setIsProjectDetailVisible(false)}>
              <img src="/img/icons/retour-blanc.svg" alt="Fleche retour" />
            </button>
          )}
          <h2 className={clsx('project-name', { 'details-mode': isProjectDetailVisible })}>
            {name}
          </h2>
        </div>
        <div className="project-action">
          {!isProjectDetailVisible && (
            <button
              style={{ visibility: isCurrentProject ? 'visible' : 'hidden' }}
              className={clsx('magic-hover', 'arrow-button')}
              type="button"
              onClick={() => setIsProjectDetailVisible(true)}>
              <span className="text">{projectData.labels.showProjectDetails}</span>
              <img src="/img/icons/lien-blanc.svg" alt="Fleche droite" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

Project.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  overviewImage: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isProjectDetailVisible: PropTypes.bool,
  setIsProjectDetailVisible: PropTypes.func.isRequired,
  currentProject: PropTypes.number.isRequired,
  setCurrentProject: PropTypes.func.isRequired
};
