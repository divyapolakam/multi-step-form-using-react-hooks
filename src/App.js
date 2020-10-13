import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import "./App.css";

import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Confirm from "./components/Confirm";
import Success from "./components/Success";

function App() {
  const [step, setStep] = useState(0);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [no, setNo] = useState("");

  const handleNext = e => {
    e.preventDefault();
    setStep(step + 1);
    console.log(fname + " " + lname);
  };

  const handlePrev = e => {
    e.preventDefault();
    setStep(step - 1);
  };

  const clearForm = e => {
    e.preventDefault();
    setStep(0);
    setFname("");
    setLname("");
    setEmail("");
    setNo("");
  };

  const values = {
    fname,
    setFname,
    lname,
    setLname,
    email,
    setEmail,
    no,
    setNo,
    handleNext,
    handlePrev
  };
  console.log(step);
  const show = () => {
    switch (step) {
      case 0:
        return <Form1 values={values} />;
      case 1:
        return <Form2 values={values} />;
      case 2:
        return <Confirm values={values} />;
      case 3:
        return <Success fname={fname} clearForm={clearForm} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <MuiThemeProvider>
        <AppBar>
          <p>Multi Step User-form (Step - {step + 1}/4) </p>
        </AppBar>
        {show()}
      </MuiThemeProvider>
    </div>
  );
}

export default App;
