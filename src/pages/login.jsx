import React from "react";
import { Col, Container, Row } from "reactstrap";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
const Login = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={4} md={4} sm={4}>
          <Card>
            <CardContent>
              <Typography>Hello</Typography>
            </CardContent>
          </Card>
        </Col>
        <Col lg={8} md={8} sm={8}>
          form
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
