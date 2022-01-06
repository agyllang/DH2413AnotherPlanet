import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Amalia from "../../images/amalia.png";
import Ao from "../../images/ao.png";
import Bosen from "../../images/bosen.png";
import Przemyslaw from "../../images/przemyslaw.png";
import Filip from "../../images/Filip.png";
import Github from "../../images/logogithub.png";

const AboutCard = ({ ...props }) => {
  const { name, role, imgSrc, gitHubLink, LinkdedIn, email } = props;
  return (
    <Container className="aboutcard boxshadow">
      <Row>
        <Col className="img-container" xs={1} md={3}>
          <img src={imgSrc} width="200px"/>
        </Col>
        <Col xs={1} md={2}>
          <Row>
            <div className="aboutcard-title">{name}</div>
            <div className="aboutcard-role">{role}</div>
          </Row>
        </Col>
        <Col>
          <Col xs={1} md={"auto"} className="aboutcard-text">
            {props.children}
          </Col>
          {gitHubLink && (
            <div className="aboutcard-personal-contact">
              <img
                className="logo"
                src={Github}
                height={"25px"}
                width={"25px"}
                alt={"github-logo"}
              />
              {"   "}
              <a href={ gitHubLink } target='_blank'>{gitHubLink}</a>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

const About = ({ ...props }) => {
  return (
    <Container className="page-container">
      <Col>
        <Row
          style={{
            backgroundImage: `url("https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/chukchi_oli_2018169_lrg_0.jpg")`,
            backgroundSize: "cover",
          }}
          className="page-title"
        >
          Project group
        </Row>
        <Col className="page-text">
          The project group of five has had different experiences that have come
          together through this project. We've learned from eachother and with
          each other while learning new techniques and exploring this new
          educational tool.
        </Col>
        <Row>
          <AboutCard
            name={"Amalia"}
            imgSrc={Amalia}
            role={"UX/Controls/Sound effects"}
            gitHubLink={"https://github.com/amaliaberglof"}
          >
            In this project, I have focused on the UX part of the project, such
            as preparing for the user evaluation part of the demos and
            presentations - preparing questions, finding participants and
            evaluating answers. I have also worked with the controls for
            locomotions and actions, as well as adding sound effects to the
            scenes and actions.
          </AboutCard>
          <AboutCard name={"Ao"} imgSrc={Ao} role={"Game designer"}>
            In this project, I am with Bosen Cheng. We focused on the environment design of the game.
            More specifically, we designed the Earth, Mars and Moon environment which act as the 
            background of the game arena, which uses free 3D asset from epic store or hand crafted 3D model.
            We utilized the advanced feature of the unreal engine such as volumetric cloud and sky box editor. 
            We also helped fix the control problem in VR mode.
          </AboutCard>
          <AboutCard name={"Bosen"} imgSrc={Bosen} role={"3D designer"}>
            In this project, I am with Ao Xu. We focused on the environment design of the game.
            More specifically, we designed the Earth, Mars and Moon environment which act as the 
            background of the game arena, which uses free 3D asset from epic store or hand crafted 3D model.
            We utilized the advanced feature of the unreal engine such as volumetric cloud and sky box editor. 
            We also helped fix the control problem in VR mode.
          </AboutCard>
          <AboutCard name={"Przemysław"} imgSrc={Przemyslaw} role={"Developer"} gitHubLink={"https://github.com/irqize"}>
            In this project, I was in charge of the physics-based game design. I designed the game arena with 
            a physics gun and interactive objects for exploration. The games provided method to observe the 
            influence of gravity. I am also in charge of the VR control of the game. I implemented the control 
            so that one can use left controlled to move and right controller to shoot with the gun.
          </AboutCard>
          <AboutCard name={"Filip"} imgSrc={Filip} role={"Developer"}>
            In this project, I was in charge of the solar system main menu. I designed the solar system which 
            acts as the main menu of the game. It features interactive planets model and sound effect. I am 
            also in charge of the control implementation of the main menu in VR mode, which allow users to 
            use the right controller as to select the planet they want to go. 
          </AboutCard>
        </Row>
      </Col>
    </Container>
  );
};

export default About;
