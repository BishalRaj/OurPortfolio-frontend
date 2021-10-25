import React from "react";

import {
  CssBaseline,
  Typography,
  Container,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material/";

import useStyles from "../styles";

const Register = () => {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState("Male");
  const handleChange = (e, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.title}>
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Personal Detail
            </Typography>
          </Container>
        </div>
        <Container maxWidth="sm">
          <form noValidate autoComplete="off">
            <TextField
              className={classes.field}
              label="First Name"
              variant="outlined"
              color="secondary"
              onChange={(e) => setFirstName(e.target.value)}
              required
              fullWidth
            />
            <TextField
              className={classes.fields}
              label="Last Name"
              variant="outlined"
              color="secondary"
              onChange={(e) => setLastName(e.target.value)}
              required
              fullWidth
            />
            <TextField
              className={classes.fields}
              label="Username"
              variant="outlined"
              color="secondary"
              onChange={(e) => setUserName(e.target.value)}
              required
              fullWidth
            />
            <TextField
              className={classes.fields}
              label="Password"
              variant="outlined"
              type="password"
              color="secondary"
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
            />
            <TextField
              className={classes.fields}
              label="Confirm Password"
              type="password"
              variant="outlined"
              color="secondary"
              required
              fullWidth
            />

            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
            >
              <ToggleButton color="secondary" value="Male">
                Male
              </ToggleButton>
              <ToggleButton color="secondary" value="Female">
                Female
              </ToggleButton>
              <ToggleButton color="secondary" value="Others">
                Others
              </ToggleButton>
            </ToggleButtonGroup>

            {/* <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={3}>
                <FormControlLabel control={<Checkbox />} label="Male" />
              </Grid>
              <Grid item xs={3}>
                <FormControlLabel control={<Checkbox />} label="Female" />
              </Grid>
            </Grid> */}
          </form>
        </Container>
      </main>
    </>
  );
};

export default Register;
