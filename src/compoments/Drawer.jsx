// src/components/Drawer.js

import React, { useState } from 'react';
import './Drawer.scss';

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleDrawer}>
        Toggle Drawer
      </button>
      {/* Additional Drawer content goes here */}
    </div>
  );
};

export default Drawer;
