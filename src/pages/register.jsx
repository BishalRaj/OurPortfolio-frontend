import React from "react";
import { CssBaseline, Button, Icons } from "@mui/material/";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useStyles from "../styles";
import AuthLayout from "../layout/authLayout";

import { useState } from "react";
import Contact from "../components/contact";
import Personal from "../components/personal";
import Project from "../components/project";
import Skills from "../components/skills";
const Register = () => {
  const classes = useStyles();

  const [count, setCount] = useState(1);

  // count < 1 && setCount(1);
  // count > 2 && setCount(2);

  const returnComponent = (
    <>
      <ArrowBackIosNewIcon
        onClick={() => setCount(count - 1)}
        color="secondary"
      />
      {count === 1 && <Personal />}
      {count === 2 && <Contact />}
      {count === 3 && <Project />}
      {count === 4 && <Skills />}

      <ArrowForwardIosIcon
        onClick={() => setCount(count + 1)}
        color="secondary"
      />
      {/* <h6>{count} of 2</h6> */}
    </>
  );

  return (
    <>
      <CssBaseline />
      <AuthLayout
        formComponent={returnComponent}
        authCardText={"Manage your portfolio more effectively"}
      />
    </>
  );
};

export default Register;
