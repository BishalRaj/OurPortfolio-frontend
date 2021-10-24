import React from "react";
// import { Col, Container, Row } from "reactstrap";
import { Grid, Card, Avatar, Typography } from "@mui/material";
import { Item } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Image, Stack } from "react-bootstrap";
import { image } from "../static";
const AuthLayout = ({
  img,
  formComponent,
  redirectComponent,
  authCardText,
  authCardImg,
}) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const cardWidth = {
    width: "92%",
    "@media (max-width: 769px)": {
      width: "100%",
    },
  };
  return (
    <Box sx={{ flexGrow: 1, height: "100vh" }} className="p-3">
      <Grid container sx={{ height: "100%" }}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "block",
            "@media (max-width:769px)": { display: "none" },
          }}
        >
          <Card
            sx={{
              height: "100%",
              borderRadius: "2.5%",
              width: cardWidth,
            }}
            className="shadow "
          >
            <Stack className="h-100 px-3">
              <Box
                component="div"
                sx={{ height: "5%", width: "100%" }}
                className="px-3 mt-3"
              >
                <Image width={75} src={image.logo} />
              </Box>

              <Box
                component="div"
                sx={{ height: "95%" }}
                className="w-100 d-flex align-items-center justify-content-center"
              >
                <Box component="div">
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{ fontWeight: 700 }}
                  >
                    {authCardText}
                  </Typography>
                  <Avatar sx={{ width: 400, height: 400 }} src={authCardImg} />
                </Box>
              </Box>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box component="div" className=" w-100 " sx={{ height: "4%" }}>
            {redirectComponent}
          </Box>
          <Box
            className=" w-100 d-flex align-items-center justify-content-center"
            sx={{ height: "96%" }}
          >
            {formComponent}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthLayout;
