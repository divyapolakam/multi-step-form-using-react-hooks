import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Confirm = ({ values }) => {
  return (
    <div style={{ marginTop: "90px", textAlign: "center", maxWidth: "360" }}>
      <h1>Verify Details</h1>
      <List>
        <ListItem>
          <ListItemText primary="First Name" secondary={values.fname} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Last Name" secondary={values.lname} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email ID" secondary={values.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Phone Number" secondary={values.no} />
        </ListItem>
      </List>
      <br />
      <br />
      <Button variant="contained" color="secondary" onClick={values.handlePrev}>
        Back
      </Button>
      &nbsp; &nbsp;
      <Button variant="contained" color="primary" onClick={values.handleNext}>
        Confirm
      </Button>
    </div>
  );
};
export default Confirm;
