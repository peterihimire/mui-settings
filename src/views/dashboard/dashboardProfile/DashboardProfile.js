import React, { useState } from "react";
import "./dashboardProfile.scss";
import img from "../../../assets/images/profile.png";

const DashboardProfile = () => {
  const [tabOne, setTabOne] = useState(true);
  const [tabTwo, setTabTwo] = useState(false);

  const handleTabOne = () => {
    setTabOne(true);
    setTabTwo(false);
  };

  const handleTabTwo = () => {
    setTabOne(false);
    setTabTwo(true);
  };

  return (
    <div className='profile_wrapper'>
      <div className='profile_container'>
        <div className='profile_header_img'>
          <img
            src={img}
            alt='profile_img'
          />
        </div>
        <div className='profile_header_text'>
          <h1>Priscilla Aimila</h1>
          <p>priscilla.aimila@cloudticians.com</p>
          <button className='special__text'>Administrator</button>
        </div>
      </div>

      <div className='tab-wrapper'>
        <ul className='tab-container'>
          <li
            className={tabOne ? "activeTab" : ""}
            style={{ cursor: "pointer" }}
            onClick={handleTabOne}
          >
            Activities
          </li>
          <li
            className={tabTwo ? "activeTab" : ""}
            style={{ cursor: "pointer" }}
            onClick={handleTabTwo}
          >
            Settings
          </li>
        </ul>
        <div className='tab-contents'>
          {tabOne && (
            <>
              <div className='profile_tab_one'>
                <h3>Tab one</h3>
              </div>
            </>
          )}
          {tabTwo && (
            <>
              <div className='profile_tab_two'>
                <h3>Tab two</h3>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
