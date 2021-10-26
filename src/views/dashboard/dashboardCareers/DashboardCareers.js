import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import SearchFilter from "../../../components/searchFilter/SearchFilter";
import Table from "../../../components/Table/Table";
import add from "../../../assets/images/add.png";

const DashboardCareers = () => {
  const location = useLocation();
  const history = useHistory()
  console.log("Careers",location);
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
      <h1>Careers</h1>
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
        <div className='tab-contents'>
          {tabOne && (
            <>
              <SearchFilter
                placeholder='Search Roles'
                ExtraComponent={
                  <Link
                    to={`/${location.pathname}/add`}
                    className='single-button'
                    // onClick={() => history.push('/dashboard/careers/add')}
                  >
                    <img src={add} alt='img'/> Add New
                  </Link>
                }
              />
              <Table />
            </>
          )}
          {tabTwo && (
            <>
              <SearchFilter
                placeholder='Search Roles'
                ExtraComponent={
                  <Link
                    to={`${location.pathname}/add`}
                    className='single-button'
                  >
                    <img src={add} /> Add New
                  </Link>
                }
              />
              <h3>Tab two</h3>
              {/* <Table /> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCareers;
