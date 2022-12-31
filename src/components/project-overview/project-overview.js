import React from 'react';
import PropTypes from 'prop-types';
import { HorizontalSeparator } from '../separator';
import { RightArrow } from '../icons/fleche-droite-blanche';
import { Bubble } from '../bubble/bubble';
import './project-overview.css';

export const ProjectOverview = ({
  date,
  projectNumber,
  onLeftNavClick,
  onRightNavClick,
  showProject
}) => (
  <section className="project-overview">
    <HorizontalSeparator className="horizontal-separator-top">
      <HorizontalSeparator className="horizontal-separator-middle" />
      <Bubble onClick={onLeftNavClick} className="left-nav-bubble" isVisible={projectNumber > 1}>
        <RightArrow />
      </Bubble>
      <Bubble onClick={onRightNavClick} className="right-nav-bubble" isVisible>
        <RightArrow />
      </Bubble>
    </HorizontalSeparator>
    <Bubble className="number-bubble" isVisible>
      {projectNumber}
    </Bubble>
  </section>
);

ProjectOverview.propTypes = {
  projectNumber: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  onLeftNavClick: PropTypes.func,
  onRightNavClick: PropTypes.func,
  showProject: PropTypes.func
};
