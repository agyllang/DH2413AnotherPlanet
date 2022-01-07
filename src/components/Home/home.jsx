import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Demo1 from "../../images/Demo1.png";
import Demo2 from "../../images/Demo2.png";

const Home = ({ ...props }) => {
  return (
    <Container className="page-container">
      <Col>
        <Row className="page-title">Another Planet</Row>
        <iframe
          src="https://drive.google.com/file/d/1JoLNgHdvI4um27DcYCuQmhH4Kjs-vSW5/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
        <Row className="page-header">Demo Photo</Row>
        <Col className="page-text">
          <img src={Demo1} width="50%"/>
          <img src={Demo2} width="50%"/>
        </Col>
        <Row className="page-header">Description</Row>
        <Col className="page-text">
          Another Planet is a VR project built in the course DH2413 Advanced
          Graphics and Interaction at KTH Royal Institute of Technology. The
          purpose of the project is to educate children in the age 13-15 about
          gravity on different planets. In the immersive and interactive VR game
          they can walk, jump, throw and investigate items, in order to learn
          more about how the different gravities affect them. The project was
          built in Unreal, and used HTC Vive controls.
        </Col>
        <Row className="page-header">Goals and Motivation</Row>
        <Col className="page-text">
          Firstly, we wanted to learn about Unreal, since none of us had worked
          with it before and we wanted to try out another game engine than
          Unity. Secondly, we also wanted to create an educational environment
          where play and curiosity is key, hence that there is no strict game
          design prompting the user to do certain things and the game platforms
          on certain planets shift layout. Lastly, we ourselves wanted to learn
          more about space and how to design space in 3D environments.
        </Col>
        <Row className="page-header">Previous works</Row>
        <Row className="page-header2">
          <a href="https://ieeexplore.ieee.org/document/5561320">
            Aw Kien Sin, and Halimah Badioze Zaman - "Live Solar System (LSS):
            Evaluation of an Augmented Reality book-based educational tool."
          </a>
        </Row>
        <Col className="page-text">
          In this paper, the authors explore how the astronomy education book
          Live Solar System (LSS), enhanced through augumented reality, can be
          affected by using tangible tools to augment the AR further. What we
          learned from this paper is that good graphics are very important when
          designing space environments, and that tangibility can have a positive
          effect on the learning experience.
        </Col>
        <Row className="page-header2">
          <a href="https://gupea.ub.gu.se/bitstream/2077/39977/1/gupea_2077_39977_1.pdf">
            Mustafa Hussein, and Carl Nätterdal - "The Benefits of Virtual
            Reality in Education- A comparision Study"
          </a>
        </Row>
        <Col className="page-text">
          Hussein and Nätterdal reviews in this paper a VR astronomy learning
          application. They found that VR is effective where interaction is
          important for educational measures, and that it helps students become
          immersed and involved in the learning experience, as well as that it
          promotes active learning.
        </Col>
        <Row className="page-header2">
          <a href="https://www.learntechlib.org/p/9543/">
            Yoav Yair, Rachel Mintz and Shai Litvak - "3D-Virtual Reality in
            Science Education: An Implication for Astronomy Teaching"
          </a>
        </Row>
        <Col className="page-text">
          How can we become more heliocentric, instead of geocentric? In this
          paper, the authors present a virtual 3D environment which teaches the
          user about the solar system by making it possible to explore it from
          different angles and views. This early work on 3D, exploration and
          education showed that it can help with mentally constructing 3D space
          and learning about physical principles.
        </Col>
      </Col>
    </Container>
  );
};

export default Home;
