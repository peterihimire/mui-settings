// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, 'firstName') || ''} ${
//         params.getValue(params.id, 'lastName') || ''
//       }`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }

import { DataGrid, 
  // GridToolbar,
 } from "@material-ui/data-grid";

// import {  GridActionsCellItem } from '@mui/x-data-grid';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SecurityIcon from '@mui/icons-material/Security';
// import FileCopyIcon from '@mui/icons-material/FileCopy';
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { useState } from "react";
import Img from "../../assets/images/profile-img.png"
import Dot from "../../assets/images/three-dot.png"
import { ThemeContext } from "../../contexts/theme";
import "./table.css";


const columns = [
 
  {
    field: "name",
    headerName: "Full Name",
    width: 190,
    editable: true,
    renderCell: (params) => <div className="img-col"> <img src={Img} alt="" /> {params.value}</div>,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "email",
    headerName: "Email Address",
    width: 200,
    editable: true,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "activePlan",
    headerName: "Active Plan",
    width: 150,
    editable: true,
    headerClassName: "super-app-theme--header",
    cellClassName: (params) =>
      clsx("super-app", {
        indraft: params.value === "Free Trial",
        premium: params.value === "Premium",
        standard: params.value === "Standard",
      }),
  },
  {
    field: "expirePlan",
    headerName: "Plan Expires",
    width: 190,
    type: "date",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "country",
    headerName: "Country",
    width: 140,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "lastActive",
    headerName: "Last Active",
    width: 150,
    headerClassName: "super-app-theme--header",
  },
  {
    field: '',
    renderCell: (params) => <div className="img-col"> <img src={Dot} alt="" /></div>,
  }
];

const data = [
  {
    id:"1",
    name:"Lucky Onoriode",
    email:"luckyeonoriode@gmail.com",
    activePlan: "Premium",
    expirePlan: "Dec 25, 2021",
    country:"U.S.A",
    lastActive:"Sep 12, 2021 12:06PM",
    photo:"../../assets/images/profile-img.png"

  },
  {
    id:"2",
    name:"Kenneth Eguakun",
    email:"kennethegua@yahoo.com",
    activePlan: "Free Trial",
    expirePlan: "Dec 25, 2021",
    country:"Azerbaijan",
    lastActive:"Sep 12, 2021 12:06PM",
    photo:"../../assets/images/profile-img.png"

  },
  {
    id:"3",
    name:"Mayowa Adegunwa",
    email:"mayowa.ade@gmail.com",
    activePlan: "Standard",
    expirePlan: "Dec 25, 2021",
    country:"U.K",
    lastActive:"Sep 12, 2021 12:06PM",
    photo:"../../assets/images/profile-img.png"

  },
  {
    id:"4",
    name:"Obianjulu Anayo",
    email:"obi.anayo@amazon.com",
    activePlan: "Premium",
    expirePlan: "Dec 25, 2021",
    country:"Ghana",
    lastActive:"Sep 12, 2021 12:06PM",
    photo:"../../assets/images/profile-img.png"

  },
  {
    id:"5",
    name:"Falade Adeola",
    email:"thefalade@gmail.com",
    activePlan: "Free Trial",
    expirePlan: "Dec 25, 2021",
    country:"Nigeria",
    lastActive:"Sep 12, 2021 12:06PM",
    photo:"../../assets/images/profile-img.png"

  },
]

// const rows = [
//   {
//     id: 1,
//     title: "Website Content: A potent weapon",
//     status: "Published",
//     publishedDate: "24-06-2021",
//     author: "Chris Palm",
//     pageHits: 24,
//   },
//   {
//     id: 2,
//     title: "A journey to the tech world",
//     status: "In Draft",
//     publishedDate: "01-06-2021",
//     author: "Judith Yakubu",
//     pageHits: 2504,
//   },
//   {
//     id: 3,
//     title: "Cloud Policy: The way forward for the world",
//     status: "Published",
//     publishedDate: "19-07-2021",
//     author: "Mayowa Adegunwa",
//     pageHits: 108,
//   },
//   {
//     id: 4,
//     title: "The Cloudfift: A true hero in cloud solution",
//     status: "Published",
//     publishedDate: "19-06-2021",
//     author: "Kenneth Eguakun",
//     pageHits: 10,
//   },
//   {
//     id: 5,
//     title: "Living in Lagos",
//     status: "Published",
//     publishedDate: "15-06-2021",
//     author: "John Doe",
//     pageHits: 200,
//   },
// ];


const Table = () => {
  const [pageSize, setPageSize] = useState(5);
  const [{ theme, 
    // isDark 
  }, 
  // toggleTheme
] = useContext(ThemeContext);
  

  const useStyles = makeStyles({
    root: {
      "& .MuiDataGrid-toolbarContainer": {
        borderBottom: "16px solid #E5E5E5",
        padding: "10px",
        display: "block",
        backgroundColor: theme.background,
        color: theme.color,
      },
      "& .MuiDataGrid-row": {
        backgroundColor: theme.background,
        color: theme.color,
      },
      "& .MuiButton-textPrimary": {
        color: theme.color,
      },
      "& .super-app-theme--header": {
        backgroundColor: theme.background,
        color: theme.color,
      },
      "& .MuiDataGrid-columnHeaderWrapper": {
        backgroundColor: theme.background,
        color: theme.color,
      },
      "& .MuiDataGrid-root": {
        backgroundColor: theme.background,
        color: theme.color,
      },
      "& .super-app.indraft": {
        color: "#DDBDFF",
        fontWeight: "bold"
      },
      "& .super-app.premium": {
        color: "#029D2E",
        fontWeight: "bold"
      },
      "& .super-app.standard": {
        color: "#FFC44F",
        fontWeight: "bold"
      },
      "& .MuiDataGrid-columnSeparator": {
        display: "none",
      },
    },
  });


  const classes = useStyles();
  return (
    <div className="table_wrapper" style={{ height: 530, width: "100%", background: "#181818" }} className={classes.root}>
      <DataGrid
        rows={data}
        rowHeight={70}
        columns={columns}
        pageSize={pageSize}
        loading={data.length === 0}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default Table;
