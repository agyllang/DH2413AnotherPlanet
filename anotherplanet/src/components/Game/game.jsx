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
        <Row className="page-header2">Making of Another Planet</Row>
        <Col className="page-text">
          <iframe
            src="https://player.vimeo.com/video/662035961?h=b69ef3696f"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Row className="page-header">Technologies</Row>
        <Col className="page-text">
          This project was built through <b>Unreal Engine</b>, which was also
          one of the main goals of this project, to learn about a new tool.
          Unreal is a more powerful tool than Unity when designing realistic
          spacescapes, especially when it comes to the sky and atmosphere
          system, which also was a reason to choose it over Unity. Unreal uses a
          blueprint system which minimizes code written, this was helpful due to
          the limited time that could be spent on this project and it also
          kickstarted the development phase easier.
        </Col>
        <Row className="page-header2">Graphics</Row>
        <Col className="page-text">
          The graphics for this project was made through <b>Blender</b>, to
          build and enhance the 3D environment and the game elements, as well as
          doing texture mapping. We were familiar with Blender from before,
          which made it a fitting tool for us to use.
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
