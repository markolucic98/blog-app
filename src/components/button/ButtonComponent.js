import React from "react";
import Button from "@mui/material/Button";

const ButtonComponent = () => {
  return (
    <>
      <Button
        variant="contained"
        href="#bottom"
        style={{
          background: "",
          padding: "15px 35px",
          borderRadius: "6px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          fontSize: "18px",
        }}
      >
        Discover
      </Button>
    </>
  );
};
export default ButtonComponent;
