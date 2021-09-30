import React from "react";
import { Button } from "@mui/material";
import { BsPlus } from "react-icons/bs";

const AddButton = () => {
  return (
    <div>
      <Button
        variant='contained'
        style={{
          textTransform: "none",
          background: "#5D55FF",
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "17px",
          letterSpacing: "0.01em",
        }}
      >
        {" "}
        <BsPlus /> Add New
      </Button>
    </div>
  );
};

export default AddButton;
