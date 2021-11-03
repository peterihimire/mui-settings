import React, { useState } from "react";
import SearchFilter from "../../../../components/searchFilter/SearchFilter";
import Table from "../../../../components/Table/Table";
import "./coursedetailsTabs.scss";

const CoursedetailsTabs = () => {
  const [tabOne, setTabOne] = useState(true);
  const [tabTwo, setTabTwo] = useState(false);
  const [tabThree, setTabThree] = useState(false);

  const handleTabOne = () => {
    setTabOne(true);
    setTabTwo(false);
    setTabThree(false);
  };

  const handleTabTwo = () => {
    setTabOne(false);
    setTabTwo(true);
    setTabThree(false);
  };

  const handleTabThree = () => {
    setTabOne(false);
    setTabTwo(false);
    setTabThree(true);
  };

  return (
    <div>
      <div className='tab-wrapper'>
        <ul className='tab-container'>
          <li
            className={tabOne ? "activeTab" : ""}
            style={{ cursor: "pointer" }}
            onClick={handleTabOne}
          >
            Services <span className='tab-count1'>300</span>
          </li>
          <li
            className={tabTwo ? "activeTab" : ""}
            style={{ cursor: "pointer" }}
            onClick={handleTabTwo}
          >
            Learning Paths<span className='tab-count2'>200</span>
          </li>
          <li
            className={tabThree ? "activeTab" : ""}
            style={{ cursor: "pointer" }}
            onClick={handleTabThree}
          >
            Certification <span className='tab-count2'>200</span>
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
          {tabThree && (
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

export default CoursedetailsTabs;
