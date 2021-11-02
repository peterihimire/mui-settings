import React from "react";
import { Link } from "react-router-dom";
import "./NavDropDown.scss";
import one from "../../assets/images/das.png";
import two from "../../assets/images/cour.png";
import four from "../../assets/images/rol.png";
import five from "../../assets/images/web.png";
import six from "../../assets/images/car.png";
import seven from "../../assets/images/insig.png";

const NavDropDown = () => {
  return (
    <div>
      <div className='dropdown__wrapper'>
        <ul>
          <Link to='/dashboard/courses'>
            <li>
              <span>
                <img src={two} alt='img' />
              </span>
              <span>Courses</span>
            </li>
          </Link>
          <Link to='/dashboard/webinars'>
            <li>
              <span>
                <img src={five} alt='img' />
              </span>
              <span>Webinars</span>
            </li>
          </Link>
          <Link to='/dashboard/roles-management'>
            <li>
              <span>
                <img src={four} alt='img' />
              </span>
              <span>Roles</span>
            </li>
          </Link>
          <Link to='/dashboard/careers'>
            <li>
              <span>
                <img src={six} alt='img' />
              </span>
              <span>Careers</span>
            </li>
          </Link>
          <Link to='/dashboard/insight'>
            <li>
              <span>
                <img src={seven} alt='img' />
              </span>
              <span>Insight</span>
            </li>
          </Link>
          <Link to='/dashboard/profile'>
            <li>
              <span>
                <img src={one} alt='img' />
              </span>
              <span>Profile</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavDropDown;
