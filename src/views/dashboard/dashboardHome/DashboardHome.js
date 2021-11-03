import React, { useState } from "react";
// import SearchFilter from "../../../components/searchFilter/SearchFilter";
import HomeTable from "./Table/HomeTable";
import "./DashboardSubscribers.css";
import Chart from "./Chart/Chart";
import Icon1 from "../../../assets/images/hand (3).png";
import Icon2 from "../../../assets/images/hand (2).png";
import Icon3 from "../../../assets/images/hand (1).png";
import Icon4 from "../../../assets/images/icon1.png";

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
        <div className='single_info_container'>
          <div className="middleclass">
            <div className='single-details-wrapper'>
              <div className='icon_wrapper'>
                <img src={Icon4} alt='img' />
              </div>
              <div className='single-details-info'>
                <p>Subscribers</p>
                <h1>2.3k</h1>
              </div>
            </div>
            <p className='increase'>
              2.5% Increase <span>(Last 24hours)</span>
            </p>
          </div>
        </div>
        <div className='single_info_container special-border'>
        <div className="middleclass">
          <div className='single-details-wrapper'>
            <div className='icon_wrapper'>
              <img src={Icon4} alt='img' />
            </div>
            <div className='single-details-info'>
              <p>Visitors</p>
              <h1>60k</h1>
            </div>
          </div>
          <p className='increase'>
            0.5% Decrease <span>(Last 24hours)</span>
          </p>
          </div>
        </div>
        <div className='single_info_container special-border'>
          <div className="middleclass">
          <div className='single-details-wrapper'>
            <div className='icon_wrapper'>
              <img src={Icon4} alt='img' />
            </div>
            <div className='single-details-info'>
              <p>Total Revenue</p>
              <h1>$100k</h1>
            </div>
          </div>
          <p className='increase'>
            2.5% Increase <span>(Last 24hours)</span>
          </p>
          </div>
        </div>
        <div className='single_info_container special-border'>
          <div className="middleclass">
          <div className='single-details-wrapper'>
            <div className='icon_wrapper'>
              <img src={Icon4} alt='img' />
            </div>
            <div className='single-details-info'>
              <p>Total Revenue</p>
              <h1>$100k</h1>
            </div>
          </div>
          <p className='increase'>
            2.5% Increase <span>(Last 24hours)</span>
          </p>
        </div>
        </div>
      </div>

      <div className='chart_wrapper'>
        <div className='chart'>
          <Chart />
        </div>
        <div className='course_rank'>
          <h2>Course Rank</h2>
          <p>Last 24Hrs</p>
          <div className='ranks'>
            <ul>
              <li>
                <img src={Icon1} alt='img' />
                <span>Salesforce</span>
              </li>
              <li>
                <img src={Icon2} alt='img' />
                <span>Google Cloud</span>
              </li>
              <li>
                <img src={Icon3} alt='img' />
                <span>Linux</span>
              </li>
              <li>
                <img src={Icon3} alt='img' />
                <span>Linux</span>
              </li>
              <li>
                <img src={Icon3} alt='img' />
                <span>Linux</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='table_container-home'>
        <div className='tab-container-header'>
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
