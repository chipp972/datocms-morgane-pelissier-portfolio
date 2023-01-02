import React from 'react';
import { ScrollingBanner } from '../scrolling-banner/scrolling-banner';
import { projectData } from '../../project-data';
import './menu-footer.css';

export const MenuFooter = () => (
  <div className="menu-footer">
    <h3>{projectData.moreClients.title}</h3>
    <ScrollingBanner>{projectData.moreClients.clientList.join(' - ')} -&nbsp;</ScrollingBanner>
  </div>
);
