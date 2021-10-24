import {
  FormControl,
  FormHelperText,
  InputLabel,
  Link,
  CardContent,
  Grid,
  Typography,
  Card,
  Container,
  TextField,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import AuthLayout from "../layout/authLayout";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const formComponent = (
    <Stack spacing={2} className="w-50">
      <Box container>
        <Grid container>
          <Grid xs={4} md={4} lg={4} className="d-flex justify-content-start">
            <Button variant="outlined" sx={{ width: "95%" }} className="py-3">
              <FcGoogle />
            </Button>
          </Grid>
          <Grid xs={4} md={4} lg={4} className="d-flex justify-content-center">
            <Button variant="outlined" sx={{ width: "95%" }} className="py-3">
              Success
            </Button>
          </Grid>
          <Grid xs={4} md={4} lg={4} className="d-flex justify-content-end">
            <Button variant="outlined" sx={{ width: "95%" }} className="py-3">
              Success
            </Button>
          </Grid>
        </Grid>
      </Box>

      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={{ width: "100%" }}
      />

      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        sx={{ width: "100%" }}
      />

      <Box container>
        <Grid container>
          <Grid md={6}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />
            </FormGroup>
          </Grid>
          <Grid md={6}>
            <Typography
              align="right"
              className="h-100 d-flex align-items-center justify-content-end"
            >
              Forgot Password?
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Button variant="contained" className="py-3">
        Login
      </Button>
    </Stack>
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
