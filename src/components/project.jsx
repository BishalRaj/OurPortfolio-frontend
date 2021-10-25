import React from 'react'
import { CssBaseline, Typography, Container, Button, TextField, Stack } from '@mui/material/';

import useStyles from "../styles";

const Project = () => {
    const classes = useStyles();
    return (
        <> <CssBaseline />
            <main>
                <div className={classes.title}>
                    <Container maxWidth="sm">
                        <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                            Project Detail
                        </Typography>
                    </Container>
                </div>
                <Container maxWidth="sm"  >
                    <form noValidate autoComplete="off" >
                        <TextField className={classes.field} label="Title" variant="outlined" color="secondary" required fullWidth />
                        <TextField className={classes.fields} label="Project Description" variant="outlined" color="secondary" required fullWidth />
                        <TextField className={classes.fields} label="Image" type='file' color="secondary" required fullWidth />
                    </form>
                </Container>
            </main>


        </>
    )
}

export default Project;
