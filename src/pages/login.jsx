import {
  FormControl,
  FormHelperText,
  InputLabel,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import AuthLayout from "../layout/authLayout";

const Login = () => {
  const formComponent = (
    <Box
      sx={{ width: "40%" }}
      component="form"
      noValidate
      autoComplete="off"
      className="p-0"
    >
      <TextField
        sx={{ width: "100%" }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <TextField
        sx={{ width: "100%" }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
    </Box>
  );

  const redirectComponent = (
    <Typography align="right">
      Don't have an account?{" "}
      <Link href="/register" underline="none" color="rgb(0, 171, 85)">
        Get Started
      </Link>
    </Typography>
  );
  return (
    <AuthLayout
      formComponent={formComponent}
      redirectComponent={redirectComponent}
    />
  );
};

export default Login;
