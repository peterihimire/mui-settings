import { DataGrid } from "@material-ui/data-grid";
import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import { useState } from "react";
import Img from "../../../../assets/images/profile-img.png"
// import Dot from "../../../../assets/images/three-dot.png"
import { ThemeContext } from "../../../../contexts/theme";
import "./table.css";


const columns = [
 
  {
    field: "name",
    headerName: "Full Name",
    width: 250,
    editable: true,
    renderCell: (params) => <div className="img-col"> <img src={Img} alt="" /> {params.value}</div>,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "email",
    headerName: "Email Address",
    width: 250,
    editable: true,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "activePlan",
    headerName: "Active Plan",
    width: 200,
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
    width: 200,
    type: "date",
    headerClassName: "super-app-theme--header",
  },
  {
    field: "country",
    headerName: "Country",
    width: 200,
    headerClassName: "super-app-theme--header",
  },
  // {
  //   field: "lastActive",
  //   headerName: "Last Active",
  //   width: 150,
  //   headerClassName: "super-app-theme--header",
  // },
  // {
  //   field: '',
  //   renderCell: (params) => <div className="img-col"> <img src={Dot} alt="" /></div>,
  // }
];

const data = [
  {
    id:"1",
    name:"Lucky Onoriode",
    email:"luckyeonoriode@gmail.com",
    activePlan: "Premium",
    expirePlan: "Dec 25, 2021",
    country:"U.S.A",

  },
  {
    id:"2",
    name:"Kenneth Eguakun",
    email:"kennethegua@yahoo.com",
    activePlan: "Free Trial",
    expirePlan: "Dec 25, 2021",
    country:"Azerbaijan",
  },
  {
    id:"3",
    name:"Mayowa Adegunwa",
    email:"mayowa.ade@gmail.com",
    activePlan: "Standard",
    expirePlan: "Dec 25, 2021",
    country:"U.K",
  },
  {
    id:"4",
    name:"Obianjulu Anayo",
    email:"obi.anayo@amazon.com",
    activePlan: "Premium",
    expirePlan: "Dec 25, 2021",
    country:"Ghana",

  },
  {
    id:"5",
    name:"Falade Adeola",
    email:"thefalade@gmail.com",
    activePlan: "Free Trial",
    expirePlan: "Dec 25, 2021",
    country:"Nigeria",

  },
]

const HomeTable = () => {
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
        border: "none"
      },
      "& .super-app.indraft": {
        color: "#DDBDFF",
        fontWeight: "bold"
      },
      "& .super-app.premium": {
        color: "#029D2E",
        fontWeight: "bold",
        border: "none"
      },
      "& .super-app.standard": {
        color: "#FFC44F",
        fontWeight: "bold"
      },
      "& .MuiDataGrid-columnSeparator": {
        display: "none",
      },
      "& .MuiDataGrid-cell":  {
        border: "none"
    }
    },
  });


  const classes = useStyles();
  return (
    <div style={{ height: 530, width: "100%" }} className={classes.root}>
      <DataGrid
        rows={data}
        rowHeight={70}
        columns={columns}
        pageSize={pageSize}
        loading={data.length === 0}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        // checkboxSelection
        // disableSelectionOnClick
      />
    </div>
  );
};

export default HomeTable;
