import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Amalia from "../../images/amalia.png";
import Ao from "../../images/ao.png";
import Bosen from "../../images/bosen.png";
import Przemyslaw from "../../images/przemyslaw.png";
import Github from "../../images/logogithub.png";

const AboutCard = ({ ...props }) => {
  const { name, role, imgSrc, gitHubLink, LinkdedIn, email } = props;
  return (
    <Container className="aboutcard boxshadow">
      <Row>
        <Col className="img-container" xs={1} md={3}>
          <img src={imgSrc} />
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
              <a href={{ gitHubLink }}>{gitHubLink}</a>
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </AboutCard>
          <AboutCard name={"Bosen"} imgSrc={Bosen} role={"3D"}>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.{" "}
          </AboutCard>
          <AboutCard name={"Przemyslaw"} imgSrc={Przemyslaw} role={"Developer"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </AboutCard>
        </Row>
      </Col>
    </Container>
  );
};

export default About;
