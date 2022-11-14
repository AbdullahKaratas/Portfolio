import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import recipes from "../../recipes/recipes.json";

const asiancuisine = recipes.main.recipe.asiancuisine;
const basiccuisine = recipes.main.recipe.basics;
const indiancuisine = recipes.main.recipe.indian;

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Basics </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {basiccuisine.map((value, index) => (
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={value.imagepath}
                isBlog={false}
                title={value.title}
                description={value.smallDescription}
                ghLink="https://github.com/soumyajit4419/Chatify"
                demoLink="https://chatify-49.web.app/"
              />
            </Col>
            ))
          }
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Asian Food </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {asiancuisine.map((value, index) => (
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={value.imagepath}
              isBlog={false}
              title={value.title}
              description={value.smallDescription}
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
          ))
        }
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Indian Food </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {indiancuisine.map((value, index) => (
              <Col md={4} className="project-card">
                <ProjectCard
                  imgPath={value.imagepath}
                  isBlog={false}
                  title={value.title}
                  description={value.smallDescription}
                  ghLink="https://github.com/soumyajit4419/Chatify"
                  demoLink="https://chatify-49.web.app/"
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
