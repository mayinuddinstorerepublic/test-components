import React, { useState } from "react";
import Drawer from "../../compoments/Drawer";
import Home from "../../pages/Home/Home";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      {/* Your dashboard content goes here */}
      <Outlet />
      <Drawer />
    </div>
  );
};

export default Dashboard;
