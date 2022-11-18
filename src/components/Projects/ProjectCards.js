import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img src={props.imgPath} alt="card-img" style={{borderRadius: "12px"}} />
      <Card.Body>
        <Card.Title>
          <strong className="purplelight">{props.title}</strong>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Link to="/about" state={{ ingredients: props.ingredients, steps: props.steps, imgPath: props.imgPath }}>
            <Button variant="flat" style={{ borderRadius: "12px"}}>
                  Details
            </Button>
        </Link>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
