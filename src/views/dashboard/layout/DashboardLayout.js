import React, { useContext } from "react";
import SideBar from "../../../components/sideBar/SideBar";
import { ThemeContext } from "../../../contexts/theme";
import TopNav from "../../../components/topNav/TopNav"
import "./DashboardLayout.css";
const DashboardLayout = (props) => {

  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  
  console.log("theme", theme);
  return (
    <div
      className='wrap'
      style={{ background: theme.background, color: theme.color }}
    >
      <div className='left'>
        <SideBar />
      </div>

      <div className='right'>
        <TopNav />
        <button onClick={toggleTheme}>toggle btn</button>
        <div className=''>{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
