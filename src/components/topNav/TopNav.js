import React, { useContext, useState } from "react";
import "./TopNav.scss";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { ThemeContext } from "../../contexts/theme";
import ICON from "../../assets/images/profile-img.png";
import TOGGLE from "../../assets/images/toggle.png";
import NavDropDown from "../NavDropDown/NavDropDown";
import AddModal from "../Modal/AddModal/AddModal";
import LOGO from "../../assets/images/dashboard-logo.svg";

const TopNav = () => {
  const [{ theme }, toggleTheme] = useContext(ThemeContext);
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className='top-nav-wrapper'>
      <div className='small_nav_logo'>
        <img src={LOGO} alt='IMG' />
      </div>

      <div className='search-wrapper'>
        <BiSearch />
        <input type='text' placeholder='Search Cloudticians' />
      </div>

      <div
        style={{ background: theme.background, color: theme.color }}
        className='other-nav-content'
      >
        <div className='add__new__user__wrapper'>
          <AddModal />
        </div>
        <div>
          <img src={TOGGLE} alt='ICON' onClick={toggleTheme} />
        </div>
        <div className='add__new__user__img'>
          <img src={ICON} alt='img' />
        </div>
        <div className='topnav-profile'>
          <h5>Priscilla Aimila</h5>
          <p>Administrator</p>
        </div>
        <div>
          <div className='dropdown__icon'>
            <IoIosArrowDown onClick={() => toggleDropdown()} />
            {dropdown && (
              <div className='view__dropdown'>
                <NavDropDown />
              </div>
            )}
          </div>
        </div>
        <div className='top-nav_icon'>
          <RiBarChartHorizontalFill />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
