import React, { useContext, useState } from "react";
import "./TopNav.scss";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { ThemeContext } from "../../contexts/theme";
// import Button from "@mui/material/Button";
// import AddButton from "../Button/AddButton";
import ICON from "../../assets/images/profile-img.png";
import TOGGLE from "../../assets/images/toggle.png";
import NavDropDown from "../NavDropDown/NavDropDown";
// import addimg from "../../assets/images/add.png";
import AddModal from "../Modal/AddModal/AddModal";

const TopNav = () => {
  const [{ theme }, toggleTheme] = useContext(ThemeContext);
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className='top-nav-wrapper'>
      <div className='search-wrapper'>
        <BiSearch />
        <input type='text' placeholder='Search Cloudticians' />
      </div>

      <div
        style={{ background: theme.background, color: theme.color }}
        className='other-nav-content'
      >
        <div className='add__new__user__wrapper'>
          {/* <AddButton /> */}
          {/* <div className='cta__add'><img src={addimg} alt="img" /> <p>Add New</p> </div> */}
          <AddModal />
          </div>
        <div>
          <img src={TOGGLE} alt='ICON' onClick={toggleTheme} />
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default TopNav;
