import React from "react";
import { Col, Container, Row } from "reactstrap";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";

const Register = () => (
  <Container fluid style={{ background: "#fff" }}>
    <Row className="p-3" style={{ height: "100vh" }}>
      <Col lg={3} md={3} sm={3}>
        <Card sx={{ height: "100%" }} className="shadow">
          <CardContent>
            <Typography>Hello in register</Typography>
          </CardContent>
        </Card>
      </Col>
      <Col lg={9} md={9} sm={9}>
        Multistep form here
      </Col>
    </Row>
  </Container>
);

export default Register;
