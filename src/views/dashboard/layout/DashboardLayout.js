import React, {useState, useContext } from "react";
import SideBar from "../../../components/sideBar/SideBar";
import { ThemeContext } from "../../../contexts/theme";
import TopNav from "../../../components/topNav/TopNav";
import "./DashboardLayout.css";
const DashboardLayout = (props) => {
  // const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  const [{ theme }] = useContext(ThemeContext);
  const [sidebar, setSidebar] = useState(false); 
  const handleMobileNav = ()=>setSidebar(!sidebar)
  console.log(sidebar)
  return (
    <div
      className='wrap'
      style={{ background: theme.background, color: theme.color }}
    >
      <div className={`left ${sidebar?"mobileview":"desktopview"}`}>
        <SideBar />
      </div>

      <div className='right'>
        <TopNav handleMobileNav={handleMobileNav}/>
        <div style={{ padding: "40px 20px" }}>{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
