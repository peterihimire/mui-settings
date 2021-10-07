import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import LOGO from "../../assets/images/dashboard-logo.svg";
import { ThemeContext } from "../../contexts/theme";
// import DASH from "../../assets/images/sideBar-icons/side-nav-dashboard-icon.png";
import "./SideBar.css";
import one from "../../assets/images/das.png";
import two from "../../assets/images/cour.png";
import three from "../../assets/images/sub.png";
import four from "../../assets/images/rol.png";
import five from "../../assets/images/web.png";
import six from "../../assets/images/car.png";
import seven from "../../assets/images/insig.png";
import eight from "../../assets/images/support.png";
import nine from "../../assets/images/case.png";

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
          <Link to='/dashboard/home' style={{ color: theme.color }}>
            <li className={activeOne ? "active" : ""} onClick={handleClickOne}>
              <span>
                <img src={one} alt='img' />
              </span>
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to='/dashboard/courses' style={{ color: theme.color }}>
            <li className={activeTwo ? "active" : ""} onClick={handleClickTwo}>
              <span>
                <img src={two} alt='img' />
              </span>
              <span>Courses</span>
            </li>
          </Link>

          <Link to='/dashboard/subscribers' style={{ color: theme.color }}>
            <li
              className={activeThree ? "active" : ""}
              onClick={handleClickThree}
            >
              <span>
                <img src={three} alt='img' />
              </span>
              <span>Subscribers</span>
            </li>
          </Link>
          <Link to='/dashboard/roles-management' style={{ color: theme.color }}>
            <li
              className={activeFour ? "active" : ""}
              onClick={handleClickFour}
            >
              <span>
                <img src={four} alt='img' />
              </span>
              <span>Roles Management</span>
            </li>
          </Link>
          <Link to='/dashboard/webinars' style={{ color: theme.color }}>
            <li
              className={activeFive ? "active" : ""}
              onClick={handleClickFive}
            >
              <span>
                <img src={five} alt='img' />
              </span>
              <span>Webinars</span>
            </li>
          </Link>
          <Link to='/dashboard/careers' style={{ color: theme.color }}>
            <li className={activeSix ? "active" : ""} onClick={handleClickSix}>
              <span>
                <img src={six} alt='img' />
              </span>
              <span>Careers</span>
            </li>
          </Link>
          <Link to='/dashboard/insight' style={{ color: theme.color }}>
            <li
              className={activeSeven ? "active" : ""}
              onClick={handleClickSeven}
            >
              <span>
                <img src={seven} alt='img' />
              </span>
              <span>Insight</span>
            </li>
          </Link>
          <Link to='/dashboard/support-ticket' style={{ color: theme.color }}>
            <li
              className={activeEight ? "active" : ""}
              onClick={handleClickEight}
            >
              <span>
                <img src={eight} alt='img' />
              </span>
              <span>Support Ticket</span>
            </li>
          </Link>
          <Link to='/dashboard/case-studies' style={{ color: theme.color }}>
            <li
              className={activeNine ? "active" : ""}
              onClick={handleClickNine}
            >
              <span>
                <img src={nine} alt='img' />
              </span>
              <span>Case Studies</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
