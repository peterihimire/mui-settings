import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchFilter from "../../../components/searchFilter/SearchFilter";
import Table from "../../../components/Table/Table";
import Dot from "../../../assets/images/three-dot.png";
import add from "../../../assets/images/add.png";
import { styled } from "@mui/system";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";

const Root = styled("span")`
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
    background-color: #9a95f3;
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
      background-color: #5d55ff;
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

const DashboardRolesManagment = () => {
  const location = useLocation();

  return (
    <div className="subscribers-wrapper">
      <h1>Roles Management</h1>
      <div className="tab-wrapper">
        <div className="tab-contents">
          <SearchFilter
            placeholder="Search Roles"
            ExtraComponent={
              <Link to={`${location.pathname}/add`} className="single-button">
                <img src={add} alt="img" /> Add New
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
                renderCell: (params) => <SwitchUnstyled component={Root} />,
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
                  <div className="img-col">
                    {" "}
                    <img src={Dot} alt="" />
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
