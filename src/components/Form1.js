import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Form1 = ({ values }) => {
  return (
    <div style={{ marginTop: "90px" }}>
      <h1>Name Please?</h1>
      <form>
        <TextField
          id="fname"
          label="First Name"
          margin="normal"
          variant="outlined"
          value={values.fname}
          onChange={e => values.setFname(e.target.value)}
        />
        &nbsp; &nbsp;
        <TextField
          id="lname"
          label="Last Name"
          margin="normal"
          variant="outlined"
          value={values.lname}
          onChange={e => values.setLname(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" color="secondary" disabled>
          Back
        </Button>
        &nbsp; &nbsp;
        <Button variant="contained" color="primary" onClick={values.handleNext}>
          Next
        </Button>
      </form>
    </div>
  );
};

export default Form1;
