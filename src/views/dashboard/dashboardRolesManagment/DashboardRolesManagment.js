import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchFilter from "../../../components/searchFilter/SearchFilter";
import Table from "../../../components/Table/Table";
import Dot from "../../../assets/images/three-dot.png";
import add from "../../../assets/images/add.png";

const DashboardRolesManagment = () => {
  const location = useLocation();

  return (
    <div className='subscribers-wrapper'>
      <h1>Roles Management</h1>
      <div className='tab-wrapper'>
        <div className='tab-contents'>
          <SearchFilter
            placeholder='Search Roles'
            ExtraComponent={
              <Link to={`${location.pathname}/add`} className='single-button'>
                <img src={add} alt='img'/> Add New
              </Link>
            }
          />
          <Table
            customColumn={[
              {
                field: "role",
                headerName: "Roles",
                width: 190,
                editable: true,
              },
              {
                field: "user",
                headerName: "Added User",
                width: 200,
                editable: true,
                headerClassName: "super-app-theme--header",
              },
              {
                field: "roleDate",
                headerName: "Role Added On",
                width: 200,
                editable: true,
                headerClassName: "super-app-theme--header",
              },
              {
                field: "active",
                headerName: "Active",
                width: 120,
                type: "date",
                headerClassName: "super-app-theme--header",
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
            ]}
            customData={[
              {
                id: "1",
                role: "Administration",
                user: "pics",
                roleDate: "Dec 25, 2021",
                active: "active",
                modified: "Sep 12, 2021 12:06PM",
              },
              {
                id: "2",
                role: "Data Analyst",
                user: "pics",
                roleDate: "Dec 25, 2021",
                active: "active",
                modified: "Sep 12, 2021 12:06PM",
              },
              {
                id: "3",
                role: "HR Manager",
                user: "pics",
                roleDate: "Dec 25, 2021",
                active: "active",
                modified: "Sep 12, 2021 12:06PM",
              },
              {
                id: "4",
                role: "Course Manager",
                user: "pics",
                roleDate: "Dec 25, 2021",
                active: "active",
                modified: "Sep 12, 2021 12:06PM",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardRolesManagment;
