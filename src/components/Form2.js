import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Form2 = ({ values }) => {
  return (
    <div style={{ marginTop: "90px" }}>
      <h1>Contacts Please?</h1>
      <TextField
        id="outlined-email-input"
        label="Email"
        type="email"
        margin="normal"
        variant="outlined"
        value={values.email}
        onChange={e => values.setEmail(e.target.value)}
      />
      &nbsp; &nbsp;
      <TextField
        id="outlined-number"
        label="Phone Number"
        margin="normal"
        variant="outlined"
        value={values.no}
        onChange={e => values.setNo(e.target.value)}
      />
      <br />
      <br />
      <Button variant="contained" color="secondary" onClick={values.handlePrev}>
        Back
      </Button>
      &nbsp; &nbsp;
      <Button variant="contained" color="primary" onClick={values.handleNext}>
        Next
      </Button>
    </div>
  );
};

export default Form2;
