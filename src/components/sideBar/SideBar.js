import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import LOGO from "../../assets/images/dashboard-logo.svg";
import { ThemeContext } from "../../contexts/theme";
import DASH from "../../assets/images/sideBar-icons/side-nav-dashboard-icon.png";
import "./SideBar.css";

const SideBar = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div className='side-bar-wrapper'>
      <div className='dashboard-logo'>
        <img src={LOGO} alt='logo' />
        <p>
          September 10, 2021 <span> . </span> 01:57 AM
        </p>
      </div>
      <div className='nav-links'>
        <ul>
          <li>
            <Link to='/dashboard/home' style={{ color: theme.color }}>
               <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/courses' style={{ color: theme.color }}>
              Courses
            </Link>
          </li>

          <li>
            <Link to='/dashboard/subscribers' style={{ color: theme.color }}>
              Subscribers
            </Link>
          </li>
          <li>
            <Link
              to='/dashboard/roles-managment'
              style={{ color: theme.color }}
            >
              Roles Managment
            </Link>
          </li>
          <li>
            <Link to='/dashboard/webinars' style={{ color: theme.color }}>
              Webinars
            </Link>
          </li>
          <li>
            <Link to='/dashboard/careers' style={{ color: theme.color }}>
              Careers
            </Link>
          </li>
          <li>
            <Link to='/dashboard/insight' style={{ color: theme.color }}>
              Insight
            </Link>
          </li>
          <li>
            <Link to='/dashboard/support-ticket' style={{ color: theme.color }}>
              Support Ticket
            </Link>
          </li>
          <li>
            <Link to='/dashboard/case-studies' style={{ color: theme.color }}>
              Case Studies
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
