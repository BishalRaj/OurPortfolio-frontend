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
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import AuthLayout from "../layout/authLayout";
import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const Login = () => {
  const [num, setnum] = useState(1);
  const formWidth = {
    width: "50%",
    "@media (max-width: 426px)": {
      width: "80%",
    },
  };

  const formComponent = (
    <Stack spacing={2} sx={formWidth}>
      <Typography variant="h5" component="div" sx={{ fontWeight: 700 }}>
        Sign in to Ourportfolio
      </Typography>
      <Typography variant="body2" component="div" className="mb-3 mt-2">
        Enter your details below.
      </Typography>
      <Box container>
        <Grid container>
          <Grid xs={4} md={4} lg={4} className=" d-flex justify-content-start">
            <Button
              variant="outlined"
              className="py-2"
              sx={{ borderColor: "#D5DADF", width: "95%" }}
            >
              <FcGoogle size={30} />
            </Button>
          </Grid>
          <Grid xs={4} md={4} lg={4} className=" d-flex justify-content-center">
            <Button
              variant="outlined"
              className="py-2"
              sx={{
                borderColor: "#D5DADF",
                width: "95%",
                color: "#2D88FF",
              }}
            >
              <CgFacebook size={30} />
            </Button>
          </Grid>
          <Grid xs={4} md={4} lg={4} className=" d-flex justify-content-end">
            <Button
              variant="outlined"
              className="py-2"
              sx={{
                borderColor: "#D5DADF",
                width: "95%",
                color: "#161B22",
              }}
            >
              <BsGithub size={30} />
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Divider flexItem className="py-1" sx={{ color: "#808080" }}>
        OR
      </Divider>
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

      <Button
        variant="contained"
        sx={{ textTransform: "none" }}
        className="py-2"
      >
        <Typography>Login</Typography>
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
