// src/components/Drawer.js

import React, { useState } from "react";
import "./Drawer.scss";
import close from "../assets/images/close.png";
import { Link } from "react-router-dom";

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleDrawer}>
        <img src={close} alt="..." />
      </button>
      {/* Additional Drawer content goes here */}
      <div>
        <Link to="">
          <p>content1</p>
        </Link>
        <Link to="">
          <p>content2</p>
        </Link>
        <Link to="">
          <p>content3</p>
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
