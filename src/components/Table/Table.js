import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

// import { DataGrid, GridToolbar } from "@material-ui/data-grid";
// import { makeStyles } from "@material-ui/styles";
// import clsx from "clsx";
// import { useState } from "react";

// const columns = [
//   {
//     field: "id",
//     headerName: "ID",
//     width: 90,
//     headerClassName: "super-app-theme--header",
//     headerAlign: "center",
//   },
//   {
//     field: "title",
//     headerName: "Title",
//     width: 150,
//     editable: true,
//     headerClassName: "super-app-theme--header",
//   },
//   {
//     field: "status",
//     headerName: "Status",
//     width: 150,
//     editable: true,
//     headerClassName: "super-app-theme--header",
//     cellClassName: (params) =>
//       clsx("super-app", {
//         indraft: params.value === "In Draft",
//         published: params.value === "Published",
//       }),
//   },
//   {
//     field: "publishedDate",
//     headerName: "Published Date",
//     width: 150,
//     type: "date",
//     headerClassName: "super-app-theme--header",
//   },
//   {
//     field: "author",
//     headerName: "Author",
//     width: 150,
//     headerClassName: "super-app-theme--header",
//   },
//   {
//     field: "pageHits",
//     headerName: "Page Hits",
//     sortable: false,
//     type: "number",
//     width: 150,
//     headerClassName: "super-app-theme--header",
//   },
// ];

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
// const useStyles = makeStyles({
//   root: {
//     "& .MuiDataGrid-toolbarContainer": {
//       borderBottom: "16px solid #E5E5E5",
//       padding: "10px",
//       display: "block",
//     },
//     "& .MuiButton-textPrimary": {
//       color: "#1D1B1B",
//     },
//     "& .super-app-theme--header": {
//       backgroundColor: "#1D1B1B",
//       color: "white",
//     },
//     "& .MuiDataGrid-columnHeaderWrapper": {
//       backgroundColor: "#1D1B1B",
//       color: "white",
//     },
//     "& .MuiDataGrid-root": {
//       backgroundColor: "white",
//     },
//     "& .super-app.indraft": {
//       color: "#1D1B1B8C",
//     },
//     "& .super-app.published": {
//       color: "#029D2E",
//     },
//     "& .MuiDataGrid-columnSeparator": {
//       display: "none",
//     },
//   },
// });

// const Table = () => {
//   const [pageSize, setPageSize] = useState(5);
//   const classes = useStyles();
//   return (
//     <div style={{ height: 530, width: "100%" }} className={classes.root}>
//       <DataGrid
//         // components={{
//         //   Toolbar: GridToolbar,
//         // }}
//         rows={rows}
//         rowHeight={70}
//         columns={columns}
//         pageSize={pageSize}
//         onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
//         rowsPerPageOptions={[5, 10, 20]}
//         pagination
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// };

// export default Table;
