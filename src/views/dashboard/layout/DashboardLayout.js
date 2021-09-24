import React from "react";
import SideBar from "../../../components/sideBar/SideBar";
import "./DashboardLayout.css";
const DashboardLayout = (props) => {
  return (
    <div className='wrap'>
      <div className='left'>
        <SideBar />
      </div>

      <div className='right'>
        <div className=''>{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
