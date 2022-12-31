import React from 'react';
import { ScrollingBanner } from '../scrolling-banner/scrolling-banner';
import { menuData } from './menu-data';
import './menu-footer.css';

export const MenuFooter = () => (
  <div className="menu-footer">
    <h3>{menuData.moreClients.title}</h3>
    <ScrollingBanner>{menuData.moreClients.clientList.join(' - ')} -&nbsp;</ScrollingBanner>
  </div>
);
