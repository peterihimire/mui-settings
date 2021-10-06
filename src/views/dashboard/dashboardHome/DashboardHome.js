import React, { useState } from "react";
// import SearchFilter from "../../../components/searchFilter/SearchFilter";
import HomeTable from "./Table/HomeTable";
import "./DashboardSubscribers.css";

const DashboardHome = () => {
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
    <div className='subscribers-wrapper'>
      <h1>Welcome Back! Priscilla</h1>

      <div className='all_info'>
        <div className='single_info_container'></div>
        <div className='single_info_container'></div>
        <div className='single_info_container'></div>
        <div className='single_info_container'></div>
      </div>

      <div className='table_container-home'>
        <div className="tab-container-header">
          <ul className='tab-container-title'>
            <li>Recent Subscribers</li>
          </ul>
        </div>
        <div className='tab-wrapper'>
          <ul className='tab-container'>
            <li
              className={tabOne ? "activeTab" : ""}
              style={{ cursor: "pointer" }}
              onClick={handleTabOne}
            >
              Individual <span className='tab-count1'>300</span>
            </li>
            <li
              className={tabTwo ? "activeTab" : ""}
              style={{ cursor: "pointer" }}
              onClick={handleTabTwo}
            >
              Business <span className='tab-count2'>200</span>
            </li>
            <li></li>
          </ul>
        </div>
      </div>

      <div className='tab-contents'>
        {tabOne && (
          <>
            <HomeTable />
          </>
        )}
        {tabTwo && (
          <>
            <HomeTable />
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
