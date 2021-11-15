import React, { useState } from "react";
import clsx from "clsx";
import SearchFilter from "../../../components/searchFilter/SearchFilter";
import Table from "../../../components/Table/Table";
import Dot from "./../../../assets/images/three-dot.png";

const customColumn = [
  {
    field: "title",
    headerName: "Title",
    width: 200,
    editable: true,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "tag",
    headerName: "Tag",
    width: 150,
    editable: true,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "published",
    headerName: "Published On",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    headerClassName: "super-app-theme--header",
    cellClassName: (params) =>
      clsx("super-app", {
        indraft: params.value === "In Draft",
        premium: params.value === "Published",
      }),
  },
  {
    field: "views",
    headerName: "Views",
    width: 150,
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
    id:"1",
    title:"The Cloud Path: Engineering the pathway to success",
    tag:"Technology",
    published:"Dec 25, 2021",
    status:"Published",
    views:"12,000 views"
  },
  {
    id:"2",
    title:"The Cloud Path: Engineering the pathway to success",
    tag:"Technology",
    published:"Dec 25, 2021",
    status:"In Draft",
    views:"12,000 views"
  },
  {
    id:"3",
    title:"The Cloud Path: Engineering the pathway to success",
    tag:"Technology",
    published:"Dec 25, 2021",
    status:"Published",
    views:"12,000 views"
  }
]

const DashboardCaseStudies = () => {
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
      <h1>Case Studies</h1>
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
              <SearchFilter />
              <Table 
                customColumn={customColumn}
                customData={customData}
              />
            </>
          )}
          {tabTwo && (
            <>
              <SearchFilter />
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

export default DashboardCaseStudies;
