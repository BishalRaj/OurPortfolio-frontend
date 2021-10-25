import React from "react";
import {
  CssBaseline,
  Typography,
  Container,
  Button,
  TextField,
  Slider,
} from "@mui/material/";

import useStyles from "../styles";

const Skills = () => {
  const classes = useStyles();
  return (
    <>
      {" "}
      <CssBaseline />
      <main className="classes.project">
        <div className={classes.title}>
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Add Your Skills
            </Typography>
          </Container>
        </div>
        <Container maxWidth="sm">
          <form noValidate autoComplete="off">
            <TextField
              className={classes.field}
              label="Title"
              variant="outlined"
              color="secondary"
              required
              fullWidth
            />
            <Slider
              size="medium"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
            <Button>add</Button>
          </form>
        </Container>
      </main>
    </>
  );
};

export default Skills;
