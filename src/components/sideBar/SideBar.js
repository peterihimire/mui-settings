import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import LOGO from "../../assets/images/dashboard-logo.svg";
import { ThemeContext } from "../../contexts/theme";
// import DASH from "../../assets/images/sideBar-icons/side-nav-dashboard-icon.png";
import "./SideBar.css";

const SideBar = () => {
  let history = useHistory();
  // const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  const [{ theme }] = useContext(ThemeContext);
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeThree, setActiveThree] = useState(false);
  const [activeFour, setActiveFour] = useState(false);
  const [activeFive, setActiveFive] = useState(false);
  const [activeSix, setActiveSix] = useState(false);
  const [activeSeven, setActiveSeven] = useState(false);
  const [activeEight, setActiveEight] = useState(false);
  const [activeNine, setActiveNine] = useState(false);

  useEffect(() => {
    setActiveOne(true);
    history.push("/dashboard/home");
  }, [history]);

  const handleClickOne = () => {
    setActiveOne(true);
    setActiveTwo(false);
    setActiveThree(false);
    setActiveFour(false);
    setActiveFive(false);
    setActiveSix(false);
    setActiveSeven(false);
    setActiveEight(false);
    setActiveNine(false);
  };
  const handleClickTwo = () => {
    setActiveOne(false);
    setActiveTwo(true);
    setActiveThree(false);
    setActiveFour(false);
    setActiveFive(false);
    setActiveSix(false);
    setActiveSeven(false);
    setActiveEight(false);
    setActiveNine(false);
  };
  const handleClickThree = () => {
    setActiveOne(false);
    setActiveTwo(false);
    setActiveThree(true);
    setActiveFour(false);
    setActiveFive(false);
    setActiveSix(false);
    setActiveSeven(false);
    setActiveEight(false);
    setActiveNine(false);
  };
  const handleClickFour = () => {
    setActiveOne(false);
    setActiveTwo(false);
    setActiveThree(false);
    setActiveFour(true);
    setActiveFive(false);
    setActiveSix(false);
    setActiveSeven(false);
    setActiveEight(false);
    setActiveNine(false);
  };
  const handleClickFive = () => {
    setActiveOne(false);
    setActiveTwo(false);
    setActiveThree(false);
    setActiveFour(false);
    setActiveFive(true);
    setActiveSix(false);
    setActiveSeven(false);
    setActiveEight(false);
    setActiveNine(false);
  };
  const handleClickSix = () => {
    setActiveOne(false);
    setActiveTwo(false);
    setActiveThree(false);
    setActiveFour(false);
    setActiveFive(false);
    setActiveSix(true);
    setActiveSeven(false);
    setActiveEight(false);
    setActiveNine(false);
  };
  const handleClickSeven = () => {
    setActiveOne(false);
    setActiveTwo(false);
    setActiveThree(false);
    setActiveFour(false);
    setActiveFive(false);
    setActiveSix(false);
    setActiveSeven(true);
    setActiveEight(false);
    setActiveNine(false);
  };
  const handleClickEight = () => {
    setActiveOne(false);
    setActiveTwo(false);
    setActiveThree(false);
    setActiveFour(false);
    setActiveFive(false);
    setActiveSix(false);
    setActiveSeven(false);
    setActiveEight(true);
    setActiveNine(false);
  };
  const handleClickNine = () => {
    setActiveOne(false);
    setActiveTwo(false);
    setActiveThree(false);
    setActiveFour(false);
    setActiveFive(false);
    setActiveSix(false);
    setActiveSeven(false);
    setActiveEight(false);
    setActiveNine(true);
  };

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
          <li className={activeOne ? "active" : ""} onClick={handleClickOne}>
            <Link to='/dashboard/home' style={{ color: theme.color }}>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={activeTwo ? "active" : ""} onClick={handleClickTwo}>
            <Link to='/dashboard/courses' style={{ color: theme.color }}>
              Courses
            </Link>
          </li>

          <li
            className={activeThree ? "active" : ""}
            onClick={handleClickThree}
          >
            <Link to='/dashboard/subscribers' style={{ color: theme.color }}>
              Subscribers
            </Link>
          </li>
          <li className={activeFour ? "active" : ""} onClick={handleClickFour}>
            <Link
              to='/dashboard/roles-management'
              style={{ color: theme.color }}
            >
              Roles Management
            </Link>
          </li>
          <li className={activeFive ? "active" : ""} onClick={handleClickFive}>
            <Link to='/dashboard/webinars' style={{ color: theme.color }}>
              Webinars
            </Link>
          </li>
          <li className={activeSix ? "active" : ""} onClick={handleClickSix}>
            <Link to='/dashboard/careers' style={{ color: theme.color }}>
              Careers
            </Link>
          </li>
          <li
            className={activeSeven ? "active" : ""}
            onClick={handleClickSeven}
          >
            <Link to='/dashboard/insight' style={{ color: theme.color }}>
              Insight
            </Link>
          </li>
          <li
            className={activeEight ? "active" : ""}
            onClick={handleClickEight}
          >
            <Link to='/dashboard/support-ticket' style={{ color: theme.color }}>
              Support Ticket
            </Link>
          </li>
          <li className={activeNine ? "active" : ""} onClick={handleClickNine}>
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
