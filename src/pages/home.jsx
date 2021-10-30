import React from "react";
import {
  Typography,
  Box,
  Avatar,
  Button,
  IconButton,
  Stack,
  Drawer,
  Divider,
  LinearProgress,
  CircularProgress,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

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
        display: "flex",
        width: "100%",
        height: "100%",
        backgroundColor: "#1e1e28",
      }}
    >
      {/* -------------------------Sidebar-------------------- */}
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

        {/* <Box sx={{ height: 50 }}>
          <Drawer className={classes.drawer} variant="permanent" anchor="right">
            sdjhsdjfh
          </Drawer>
        </Box> */}

        <Box sx={{ backgroundColor: "#1e1e28", maxWidth: 300, padding: 2 }}>
          <Stack direction="row">
            <Typography
              variant="subtitle1"
              color="white"
              sx={{ flexGrow: "1" }}
            >
              Residence
            </Typography>
            <Typography variant="subtitle1" color="white">
              Residence
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography
              variant="subtitle1"
              color="white"
              sx={{ flexGrow: "1" }}
            >
              City
            </Typography>
            <Typography variant="subtitle1" color="white">
              City
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography
              variant="subtitle1"
              color="white"
              sx={{ flexGrow: "1" }}
            >
              Age
            </Typography>
            <Typography variant="subtitle1" color="white">
              Age
            </Typography>
          </Stack>
          <Divider className="mt-2" light={true} />

          {/* --------------------Skills--------------------- */}
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

          {/* --------------------Coding--------------------------- */}
          <Typography variant="subtitle1" color="white" className="py-2">
            Coding
          </Typography>
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
            <Stack direction="row" className="mt-0">
              <Typography
                variant="subtitle1"
                color="white"
                className="mt-2"
                sx={{ flexGrow: "1" }}
              >
                Dart
              </Typography>
              <Typography variant="subtitle1" color="white" className="mt-2">
                value
              </Typography>
            </Stack>
            <LinearProgress variant="determinate" value={20} className="mt-1" />
            <Stack direction="row" className="mt-0">
              <Typography
                variant="subtitle1"
                color="white"
                className="mt-2"
                sx={{ flexGrow: "1" }}
              >
                Dart
              </Typography>
              <Typography variant="subtitle1" color="white" className="mt-2">
                value
              </Typography>
            </Stack>
            <LinearProgress variant="determinate" value={80} className="mt-1" />
            <Stack direction="row" className="mt-0">
              <Typography
                variant="subtitle1"
                color="white"
                className="mt-2"
                sx={{ flexGrow: "1" }}
              >
                Dart
              </Typography>
              <Typography variant="subtitle1" color="white" className="mt-2">
                value
              </Typography>
            </Stack>
            <LinearProgress variant="determinate" value={80} className="mt-1" />
            <Stack direction="row" className="mt-0">
              <Typography
                variant="subtitle1"
                color="white"
                className="mt-2"
                sx={{ flexGrow: "1" }}
              >
                Dart
              </Typography>
              <Typography variant="subtitle1" color="white" className="mt-2">
                value
              </Typography>
            </Stack>
            <LinearProgress variant="determinate" value={40} className="mt-1" />
          </Stack>
          <Divider className="mt-4" light={true} />

          {/* ---------------------Knowledge---------------------- */}
          <Typography variant="subtitle1" color="white" className="py-2">
            Knowledge
          </Typography>
          <Stack direction="row" spacing={1}>
            <CheckOutlinedIcon color="warning" />
            <Typography variant="subtitle1" color="white">
              Flutter,Dart
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <CheckOutlinedIcon color="warning" />
            <Typography variant="subtitle1" color="white">
              Html, Css, JS
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <CheckOutlinedIcon color="warning" />
            <Typography variant="subtitle1" color="white">
              FireBase Knowledge
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <CheckOutlinedIcon color="warning" />
            <Typography variant="subtitle1" color="white">
              GIT Knowledge
            </Typography>
          </Stack>
          <Divider className="mt-3" light={true} />

          <Stack alignItems="center" direction="column" className="mt-3">
            <Button
              variant="text"
              color="warning"
              endIcon={<CloudDownloadOutlinedIcon />}
            >
              Download CV
            </Button>
          </Stack>
          <Box sx={{ height: 10 }}></Box>

          {/* ----------------------Social Links------------------- */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                height: 35,
                width: "100%",
                backgroundColor: "#24242e",
                alignSelf: "center",
                marginLeft: "0%",
              }}
            >
              <IconButton size="large" sx={{ marginLeft: 7 }}>
                <GitHubIcon sx={{ fontSize: 26 }} />
              </IconButton>
              <IconButton size="large">
                <TwitterIcon sx={{ fontSize: 26 }} />
              </IconButton>
              <IconButton size="large">
                <TwitterIcon sx={{ fontSize: 26 }} />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Box>
      {/* ----- */}
      <Typography variant="h1" color="white">
        sdjfsdhjsdg
      </Typography>
    </Box>
  );
}

export default Home;
