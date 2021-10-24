import React from "react";
// import { Col, Container, Row } from "reactstrap";
import { Grid, Card } from "@mui/material";
import { Item } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
const AuthLayout = ({ img, formComponent, redirectComponent }) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    // <Container fluid style={{ height: "100vh" }}>
    //   <Row className="p-1 my-0" style={{ height: "inherit" }}>
    //     <Col lg={4} md={5} sm={12}>
    //       <Card sx={{ height: "100%" }} className="shadow">
    //         <CardContent>
    //           <Typography>{img}</Typography>
    //         </CardContent>
    //       </Card>
    //     </Col>
    //     <Col lg={8} md={7} sm={12} className="h-100">
    //       <Row className="py-3 m-0" style={{ height: "4%" }}>
    //         <Col>{redirectComponent}</Col>
    //       </Row>
    //       <Row className="m-0 p-0" style={{ height: "96%" }}>
    //         <Col className="d-flex align-items-center justify-content-center">
    //           {formComponent}
    //         </Col>
    //       </Row>
    //     </Col>
    //   </Row>
    // </Container>
    <Box sx={{ flexGrow: 1, height: "100vh" }} className="p-3">
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{ height: "100%", borderRadius: "2.5%", width: "92%" }}
            className="shadow"
          >
            hello
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            component="form"
            className="h-100 w-100 d-flex align-items-center justify-content-center"
          >
            {formComponent}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthLayout;
