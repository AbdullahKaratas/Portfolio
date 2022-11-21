import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom'
import Particle from "../Particle";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from "@mui/material";

function About(props) {
  const location = useLocation()
  const { ingredients, steps, imgPath } = location.state
  debugger;
  return (
    <Container fluid className="about-section" style={{minHeight: '100vh'}}>
      {/* <Particle /> */}
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
            <Typography variant="h4" sx={{marginBottom: "12px"}}>Zutaten</Typography>
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
            <img src={imgPath} alt="about" style={{borderRadius: '12px', maxWidth: "450px"}} />
          </Col>
        </Row>
          <Typography variant="h4" sx={{marginBottom: "12px"}}>Schritte</Typography>
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
