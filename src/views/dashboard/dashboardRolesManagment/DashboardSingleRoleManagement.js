import React from 'react'
import {Link} from "react-router-dom"
import Table from "../../../components/Table/Table";
import Dot from "../../../assets/images/three-dot.png";

function DashboardSingleRoleManagement() {
    return (
        <div className='subscribers-wrapper'>
            <div className='role__top'>
                <Link to='/dashboard/roles-management' className='role__top--left'>
                <span>Back to Roles</span>
                </Link>
                <div className='role__top--right'>
                    <span>Roles&#62;</span>
                    <span>Administrator</span>
                </div>
            </div>
            <h1 className='role__heading'>Administrator</h1>
            <div>
                <div>
                    <p>As an administrator, you will be responsible for helping the smooth running of the business by ensuring filing and documentation is kep up to date. Duties may include using specialist computer software and understanding the requirements of the business you are working in.</p>
                    <div>
                        <button>Edit Role</button>
                        <button>Delete</button>
                    </div>
                </div>
                <div>
                    <h3>ACCESS GRANTED</h3>
                    <div className='role__form--checkboxes'>
                    <label className='role__form--checkbox'>
                        <input type='checkbox' /> <span>Courses</span>
                    </label>
                    <label className='role__form--checkbox'>
                        <input type='checkbox' /> <span>Role Management</span>
                    </label>
                    <label className='role__form--checkbox'>
                        <input type='checkbox' /> <span>Subscribers</span>
                    </label>
                    <label className='role__form--checkbox'>
                        <input type='checkbox' /> <span>Webinars</span>
                    </label>
                    <label className='role__form--checkbox'>
                        <input type='checkbox' /> <span>Careers</span>
                    </label>
                    <label className='role__form--checkbox'>
                        <input type='checkbox' /> <span>Analysis</span>
                    </label>
                    <label className='role__form--checkbox'>
                        <input type='checkbox' /> <span>Settings</span>
                    </label>
                    </div>
                </div>
            </div>
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
    )
}

export default DashboardSingleRoleManagement
