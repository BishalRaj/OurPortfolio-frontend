import React from "react";
import {
  CssBaseline,
  Typography,
  Container,
  Button,
  TextField,
  Stack,
} from "@mui/material/";

import useStyles from "../styles";
import AuthLayout from "../layout/authLayout";

import { useState } from "react";
import Contact from "../components/contact";
import Personal from "../components/personal";
import Project from "../components/project";
const Register = () => {
  const classes = useStyles();

  const [count, setCount] = useState(1);

  // const formComponent = () => {
  //   switch (count) {
  //     case 1:
  //       return <Contact />
  //       break;

  //     case 2:
  //       return <Personal />
  //       break;
  //     default:
  //       return ''
  //   }
  // }

  // count < 1 && setCount(1);
  // count > 2 && setCount(2);

  const returnComponent = (
    <>
      <Button onClick={() => setCount(count - 1)}>Pre</Button>

      {count === 1 && <Personal />}
      {count === 2 && <Contact />}
      {count === 3 && <Project />}
      <Button onClick={() => setCount(count + 1)}>Next</Button>
      {/* <h6>{count} of 2</h6> */}
    </>
  );

  return (
    <>
      <CssBaseline />
      <AuthLayout formComponent={returnComponent} />
    </>
  );
};

export default Register;
