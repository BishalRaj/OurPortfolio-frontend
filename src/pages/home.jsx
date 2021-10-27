import React from "react";
import {
  Typography,
  Box,
  Avatar,
  Stack,
  Divider,
  LinearProgress,
  CircularProgress,
} from "@mui/material";
import useStyles from "../styles";

// const drawerWidth = 240;
// const useStyles = makeStyles({
//   drawer: {
//     width: drawerWidth,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   root: {
//     display: "flex",
//   },
// });

function Home() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    //   <Drawer
    //     className={classes.drawer}
    //     variant="permanent"
    //     anchor="left"
    //     classes={{ paper: classes.drawerPaper }}
    //   >
    //     <div>
    //       <Typography variant="h4">text here</Typography>
    //     </div>
    //   </Drawer>
    //   <div className={classes.page}>hielll</div>
    // </div>

    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#1e1e28",
      }}
    >
      <Box
        className="shadow"
        sx={{
          width: 300,
          height: "100%",
          marginLeft: "3%",
          backgroundColor: "white",
        }}
      >
        <Box sx={{ width: 300, height: 240, backgroundColor: "#242430" }}>
          <Box sx={{ height: "25%" }} />
          <Stack direction="column" alignItems="center">
            <Avatar
              sx={{ width: 100, height: 100 }}
              variant="circular"
              alt="Cindy Baker"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROC1QdTfNU6-qVxfpduwsUGu2n5bviGFTwg&usqp=CAU"
            />
          </Stack>
          <Typography
            variant="subtitle1"
            textAlign="center"
            color="white"
            className="mt-3"
          >
            text here Here
          </Typography>
          <Typography variant="subtitle2" color="white" textAlign="center">
            text Here
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: "#1e1e28", maxWidth: 300, padding: 2 }}>
          <Stack direction="row" spacing={16}>
            <Typography variant="subtitle1" color="white">
              Residence
            </Typography>
            <Typography variant="subtitle1" color="white">
              Residence
            </Typography>
          </Stack>
          <Stack direction="row" spacing={26.5}>
            <Typography variant="subtitle1" color="white">
              City
            </Typography>
            <Typography variant="subtitle1" color="white">
              City
            </Typography>
          </Stack>
          <Divider className="mt-2" light={false} />
          <Typography variant="subtitle1" color="white" className="py-3">
            Skills
          </Typography>
          <Box sx={{ position: "relative" }}>
            <CircularProgress
              variant="determinate"
              sx={{
                color: "#191923",
                right: 30,
              }}
              size={110}
              thickness={2}
              value={100}
            />
            <CircularProgress
              variant="determinate"
              disableShrink
              sx={{
                color: "#ffc107",
                position: "absolute",
                left: 0,
              }}
              size={110}
              thickness={2}
              value={30}
            />
            <Typography variant="subtitle1" color="white" className="mx-4">
              Skills
            </Typography>
          </Box>
          <Divider className="mt-2" light={true} />
          <Typography variant="subtitle1" color="white" className="py-3">
            Coding
          </Typography>
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
            <LinearProgress variant="determinate" value={20} />
            <LinearProgress variant="determinate" value={5} />
            <LinearProgress variant="determinate" value={80} />
            <LinearProgress variant="determinate" value={45} />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
