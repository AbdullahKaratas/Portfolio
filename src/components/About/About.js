import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom'
import Particle from "../Particle";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function About(props) {
  const location = useLocation()
  const { ingredients, steps, imgPath } = location.state
  console.log(ingredients)
  debugger;
  return (
    <Container fluid className="about-section" style={{minHeight: '100vh'}}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Zutaten</strong>
            </h1>
            <List>
              {ingredients.map((x, i) =>
                <ListItem disablePadding>
                <ListItemText primary={x} />
              </ListItem>
              )}
            </List>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={imgPath} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Schritte</strong>
        </h1>
        <List>
          {steps.map((x, i) =>
            <ListItem>
              <ListItemText primary={i+1 + ': ' + x} />
            </ListItem>
          )}
        </List>
      </Container>
    </Container>
  );
}

export default About;
