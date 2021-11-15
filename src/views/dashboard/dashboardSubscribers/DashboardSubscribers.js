import React, { useState } from "react";
import SearchFilter from "../../../components/searchFilter/SearchFilter";
import Table from "../../../components/Table/Table";
import "./DashboardSubscribers.css";

const DashboardSubscribers = () => {
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
      <h1>Subscribers</h1>
      <div className='tab-wrapper'>
        <ul className='tab-container'>
          <li
            className={tabOne ? "activeTab" : ""}
            style={{ cursor: "pointer" }}
            onClick={handleTabOne}
          >
            Individual <span className={tabOne ? "tab-count1" : "tab-count2"}>300</span>
          </li>
          <li
            className={tabTwo ? "activeTab" : ""}
            style={{ cursor: "pointer" }}
            onClick={handleTabTwo}
          >
            Business <span className={tabTwo ? "tab-count1" : "tab-count2"}>200</span>
          </li>
        </ul>
        <div className='tab-contents'>
          {tabOne && (
            <>
              <SearchFilter />
              <Table />
            </>
          )}
          {tabTwo && (
            <>
              <SearchFilter />
              <Table />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardSubscribers;
