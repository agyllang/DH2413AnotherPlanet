import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Game = () => {
  return (
    <Container className="page-container">
      <Col>
        <Row
          className="page-title"
          style={{
            backgroundImage: `url("https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/7.11-400d1709madagascar.jpg")`,
            backgroundSize: "cover",
          }}
        >
          The Game
        </Row>

        <Row className="page-header">Technologies</Row>
        <Row className="page-header2">Graphics</Row>
        <Col className="page-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Col>
        <Row className="page-header2">Interactions</Row>
        <Col className="page-text">
          The user interacts with the VR game through the handheld HTC Vive
          controls. With the left hand control, the user can move (left/right,
          front/back) by rotating their finger on the Vive trackpad. If just
          touching, the avatar moves slowly, if clicking, the avatar moves
          faster. With the right hand control, the user can shoot with the
          gravity gun by pointing the gun towards the item they want to pick up.
          They can throw and place the items as they like in the 3D space.
          <b />
          By these interactions, the user is very free to explore the
          environment as they wish. Some of the items also interacts with the
          user, such as the springboard that shoots the avatar up in the air.
        </Col>
        <Row className="page-header2">Challenges</Row>
        <Col className="page-text">
          The Unreal Engine is a large and heavy program, which challanged the
          group work since some of the members couldn't work on their own
          computer, but instead had to work solely in the VIC studio. Code
          sharing was also a challenge, so having to merge all the different
          parts together that the members had worked with individually also
          posed some problems.
          <br />
          In terms of the user experience, another challenge was that movement
          wasn't mapped to the users actual movements (such as locomotion) which
          caused a seasicking feeling. This was however something we had to take
          a decision on early, due to the limitations in space and resources
          that we knew we were going to face during demos and presentations. The
          head movement wasn't also fully mapped to the display view, it seemed
          to be moving too fast. New challenges would probably appear if we had
          the opportunity to user test the VR game on kids.
        </Col>
        <Row className="page-header2">Lessons learned</Row>
        <Col className="page-text">
          Even though it was fun learning a new tool, it got off the project to
          a slow start where we put a lot of time into learning the tool, which
          produced a small output. In the end though, all members of the project
          had had hands on experience with the tool and had learned new
          techniques - together and individually.
        </Col>
      </Col>
    </Container>
  );
};

export default Game;
