import React from "react";
import { CssBaseline, Typography, Container, Button, TextField, Stack } from '@mui/material/';

import useStyles from "../styles";


const Register = () => {

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.title}>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Personal Detail
            </Typography>
          </Container>
        </div>
        <Container maxWidth="sm"  >
          <form noValidate autoComplete="off" >
            <TextField className={classes.field} label="First Name" variant="outlined" color="secondary" required fullWidth />
            <TextField className={classes.fields} label="Last Name" variant="outlined" color="secondary" required fullWidth />
            <TextField className={classes.fields} label="Username" variant="outlined" color="secondary" required fullWidth />
            <TextField className={classes.fields} label="Password" variant="outlined" type="password" color="secondary" required fullWidth />
            <TextField className={classes.fields} label="Confirm Password" type="password" variant="outlined" color="secondary" required fullWidth />

            <Stack spacing={2} direction="row" >
              <Button variant="outlined" color="secondary">Next</Button>
            </Stack>
          </form>
        </Container>
        <div className={classes.title}>
          <Container maxWidth="sm">
            <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
              Contact Detail
            </Typography>
          </Container>
        </div>
        <Container maxWidth="sm"  >
          <form noValidate autoComplete="off" >
            <TextField className={classes.field} label="Email" variant="outlined" color="secondary" required fullWidth />
            <TextField className={classes.field} label="Address" variant="outlined" color="secondary" required fullWidth />
            <TextField className={classes.fields} label="Phone No." variant="outlined" type="number" color="secondary" required fullWidth />


            <Stack spacing={2} direction="row" >
              <Button variant="outlined" color="secondary">Previous</Button>
              <Button variant="outlined" color="secondary">Next</Button>
            </Stack>
          </form>
        </Container>

      </main>
    </>
  )
};

export default Register;
