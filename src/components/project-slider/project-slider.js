import React from 'react';
import { Project } from './project';
import { projectData } from '../../project-data';
import PropTypes from 'prop-types';
import './project-slider.css';

export const ProjectSlider = ({ currentProject, ...props }) => {
  const width = projectData.projectList.length * 100;

  return (
    <section
      style={{ width: `${width}vw`, transform: `translateX(-${currentProject * 94}vw)` }}
      className="project-slider">
      {projectData.projectList.map(({ id, ...projectProps }) => (
        <Project key={id} id={id} currentProject={currentProject} {...projectProps} {...props} />
      ))}
    </section>
  );
};

ProjectSlider.propTypes = {
  isProjectDetailVisible: PropTypes.bool.isRequired,
  setIsProjectDetailVisible: PropTypes.func.isRequired,
  currentProject: PropTypes.number.isRequired,
  setCurrentProject: PropTypes.func.isRequired
};
