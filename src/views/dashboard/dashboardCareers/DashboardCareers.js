import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchFilter from "../../../components/searchFilter/SearchFilter";
import Table from "../../../components/Table/Table";
import Dot from "../../../assets/images/three-dot.png";
import add from "../../../assets/images/add.png";
import { styled } from '@mui/system';
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/core/SwitchUnstyled';

 const Root = styled('span')`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: #191919;
    border-radius: 43px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 16px;
    height: 16px;
    top: 3px;
    left: 4px;
    border-radius: 16px;
    background-color: #9A95F3;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 19px;
      top: 4px;
      background-color: #5D55FF;
    }

    .${switchUnstyledClasses.track} {
      background: #fff;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
`;

const customColumn = [
  {
    field: "jobtitle",
    headerName: "Job Title",
    width: 190,
    editable: true,
  },
  {
    field: "candidates",
    headerName: "Candidates",
    width: 150,
    editable: true,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "location",
    headerName: "Location",
    width: 150,
    editable: true,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "jobtype",
    headerName: "JobType",
    width: 150,
    type: "date",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "active",
    headerName: "Active",
    width: 100,
    headerClassName: "super-app-theme--header",
    renderCell: (params)=><SwitchUnstyled component={Root} />
  },
  {
    field: "postedon",
    headerName: "Posted On",
    width: 200,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "",
    renderCell: (params) => (
      <div className='img-col'>
        {" "}
        <img src={Dot} alt='' />
      </div>
    ),
  },
]

const customData = [
  {
    id:1,
    jobtitle:"Sr. Product Designer",
    candidates:"240 candidates",
    location:"Washington DC",
    jobtype:"Contract",
    active:"active",
    postedon:"Feb 14, 2021 12:06PM"
  },
  {
    id:2,
    jobtitle:"Business Analyst",
    candidates:"10 candidates",
    location:"Washington DC",
    jobtype:"Contract",
    active:"active",
    postedon:"Feb 14, 2021 12:06PM"
  },
  {
    id:3,
    jobtitle:"HR Manager",
    candidates:"42 candidates",
    location:"remote",
    jobtype:"Internship",
    active:"active",
    postedon:"Feb 14, 2021 12:06PM"
  }
]




const DashboardCareers = () => {
  const location = useLocation();
  // const history = useHistory()
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
      
      {/* <Switch color="primary" name="checked"     /> */}
      <div className='tab-wrapper'>
        <ul className='tab-container'>
          <li
            className={tabOne ? "activeTab" : ""}
            style={{ cursor: "pointer" }}
            onClick={handleTabOne}
          >
            Job Posted <span className='tab-count1'>13</span>
          </li>
          <li
            className={tabTwo ? "activeTab" : ""}
            style={{ cursor: "pointer" }}
            onClick={handleTabTwo}
          >
          Submitted Applications <span className='tab-count2'>450</span>
          </li>
        </ul>
        <div className='tab-contents'>
          {tabOne && (
            <>
              <SearchFilter
                placeholder='Search Roles'
                ExtraComponent={
                  <Link
                    to={`${location.pathname}/add`}
                    className='single-button'
                  >
                    <img src={add} alt='img'/> Add New
                  </Link>
                }
              />
              <Table
                customColumn={customColumn}
                customData={customData}
              />
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
                    <img src={add} alt='img' /> Add New
                  </Link>
                }
              />
               <Table
                customColumn={customColumn}
                customData={customData}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCareers;
