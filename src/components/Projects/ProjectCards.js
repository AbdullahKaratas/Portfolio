import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

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
        <Link to="/about">
            <Button variant="flat" style={{borderRadius: "12px"}}>
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
