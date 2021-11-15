import React, { useState } from "react";
import { Switch } from "@material-ui/core";
import SearchFilter from "../../../../components/searchFilter/SearchFilter";
import Table from "../../../../components/Table/Table";
import "./coursedetailsTabs.scss";
import Img from "../../../../assets/images/profile-img.png"
import Dot from "../../../../assets/images/three-dot.png";

const customColumn = [
  {
    field: "name",
    headerName: "Full Name",
    width: 200,
    renderCell: (params) => <div className="img-col"> <img src={Img} alt="" /> {params.value}</div>,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email Address",
    width: 150,
    editable: true,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "added",
    headerName: "User Added on",
    width: 150,
    editable: true,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "active",
    headerName: "Active",
    width: 150,
    headerClassName: "super-app-theme--header",
    renderCell: (params)=><Switch color="primary" name="checked" />
  },
  {
    field: "modified",
    headerName: "Last Modified",
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
    id:"1",
    name:"Lucky Onoriode",
    email:"luckyeonoriode@gmail.com",
    added: "Dec 25, 2021",
    modified:"Sep 12, 2020 11:06AM"
  },
  {
    id:"2",
    name:"Daniel Kadiri",
    email:"danielkadiri@gmail.com",
    added: "Dec 25, 2021",
    modified:"Sep 12, 2020 11:06AM"
  },
  {
    id:"3",
    name:"Lucky Onoriode",
    email:"luckyeonoriode@gmail.com",
    added: "Dec 25, 2021",
    modified:"Sep 12, 2020 11:06AM"
  }
]


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
            Services <span className='tab-count1'>13</span>
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
              <Table 
              customColumn={customColumn}
                customData={customData}/>
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
          {tabThree && (
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

export default CoursedetailsTabs;
