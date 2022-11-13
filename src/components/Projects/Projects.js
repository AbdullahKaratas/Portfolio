import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import glutenfreeyufka from "../../Assets/Basics/glutenfreeyufka.png";
import lentilpatties from "../../Assets/Basics/lentis-patties.jpg";
import ramen from "../../Assets/Asian-Food/ramen.png";
import broccolipakorakadhi from "../../Assets/Indian-Food/broccoli-pakora-kadhi.png"
import recipes from "../../recipes/recipes.json";

const asiancuisine = recipes.main.recipe.asiancuisine;

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Basics </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={glutenfreeyufka}
              isBlog={false}
              title="Gluten-free Yufka"
              description="Ein schneller und einfacher glutenfreier Yufka. Mit der geheimen Zusammensetzung für garantierten Erfolg."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lentilpatties}
              isBlog={false}
              title="Lentil patties"
              description="Einfache, schnelle und gesunde Linsen patties. Erweiterbar mit Gemüse deiner Wahl. Passt hervorragend zu einem leckeren Salat."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
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
              imgPath={ramen}
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={broccolipakorakadhi}
              isBlog={false}
              title="Broccoli Pakora Kadhi"
              description="Gesund oder ungesund ist hier die Frage. Ob airfryer, backofen oder in der Fritteuse, mit diesem Gericht wird die Kombination aus Kichererbsen und Brokkoli zum Traum."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
