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

const Contact = () => {
  const classes = useStyles();
  return (
    <>
      {" "}
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
              Contact Detail
            </Typography>
          </Container>
        </div>
        <Container maxWidth="sm">
          <form noValidate autoComplete="off">
            <TextField
              className={classes.field}
              label="Email"
              variant="outlined"
              color="secondary"
              required
              fullWidth
            />
            <TextField
              className={classes.fields}
              label="Address"
              variant="outlined"
              color="secondary"
              required
              fullWidth
            />
            <TextField
              className={classes.fields}
              label="Phone No."
              variant="outlined"
              type="number"
              color="secondary"
              required
              fullWidth
            />
          </form>
        </Container>
      </main>
    </>
  );
};

export default Contact;
