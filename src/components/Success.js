import React from "react";
import Button from "@material-ui/core/Button";

const Success = ({ fname, clearForm }) => {
  return (
    <div style={{ marginTop: "90px", textAlign: "center" }}>
      <h1>Form Submitted Successfully</h1>
      <p>Thank you {fname}. We will get back to you soon</p>
      <Button variant="contained" color="primary" onClick={clearForm}>
        Go Home
      </Button>
    </div>
  );
};

export default Success;
