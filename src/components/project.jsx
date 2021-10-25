import React, { useState } from "react";

import {
  CssBaseline,
  Typography,
  Container,
  Button,
  TextField,
} from "@mui/material/";

import useStyles from "../styles";

const Project = () => {
  const classes = useStyles();

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [project, setproject] = useState([]);

  function titleChange(e) {
    console.log(e.target.value);
  }
  function descriptionChange(e) {
    console.log(e.target.value);
  }

  function handleSubmit() {
    setproject((a) => [...a, { title, description }]);
  }

  console.log(project);
  return (
    <>
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
              Project Detail
            </Typography>
          </Container>
        </div>
        <Container maxWidth="sm">
          <form noValidate autoComplete="off">
            <TextField
              className={classes.field}
              onChange={(e) => setTitle(e.target.value)}
              label="Title"
              variant="outlined"
              color="secondary"
              required
              fullWidth
            />
            <TextField
              className={classes.fields}
              onChange={(e) => setDescription(e.target.value)}
              label="Project Description"
              variant="outlined"
              color="secondary"
              required
              fullWidth
            />
            <TextField
              className={classes.fields}
              onChange={(e) => setDescription(e.target.value)}
              label="Image"
              variant="outlined"
              color="secondary"
              type="file"
              required
              fullWidth
            />

            <Button onClick={handleSubmit}>add</Button>
          </form>
          {project.map((item, key) => {
            return (
              <>
                <p key={key * 1 - 5 * 8}>
                  {item.title}, {item.description}
                </p>
              </>
            );
          })}
        </Container>
      </main>
    </>
  );
};

export default Project;
