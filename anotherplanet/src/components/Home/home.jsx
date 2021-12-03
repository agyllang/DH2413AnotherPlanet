import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = ({ ...props }) => {
  return (
    <Container className="page-container">
      <Col>
        <Row className="page-title">Another Planet</Row>
      </Col>
    </Container>
  );
};

export default Home;
