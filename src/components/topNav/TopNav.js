import React, { useContext } from "react";
import "./TopNav.css";
import { BiSearch, BiSun } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { ThemeContext } from "../../contexts/theme";
import Button from "@mui/material/Button";
import AddButton from "../Button/AddButton";
import ICON from "../../assets/images/profile-img.png";
import TOGGLE from "../../assets/images/toggle.png";

const TopNav = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    <div className='top-nav-wrapper'>
      <div className='search-wrapper'>
        <BiSearch />
        <input type='text' placeholder='Search Cloudticians' />
      </div>

      <div className='other-nav-content'>
          <div style={{ marginRight: "40px" }}><AddButton /></div>
        <div>
        <img src={TOGGLE} alt='ICON' onClick={toggleTheme} /></div>
        <div>
        <img src={ICON} alt='img' /></div>
        <div className='topnav-profile'>
          <h5>Priscilla Aimila</h5>
          <p>Administrator</p>
        </div>
        <div >
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
