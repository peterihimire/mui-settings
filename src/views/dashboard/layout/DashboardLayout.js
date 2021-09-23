import React from "react";
import SideBar from "../../../components/sideBar/SideBar";

const DashboardLayout = (props) => {

  return (
    <div className=''>
      <div className=""><SideBar /></div>

      <div className=''>
        <div className=''>{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
