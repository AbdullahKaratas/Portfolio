import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import recipes from "../../recipes/recipes.json";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import RecipeReviewCard from './MUICards'


const asiancuisine = recipes.main.recipe.asiancuisine;
const basiccuisine = recipes.main.recipe.basics;
const indiancuisine = recipes.main.recipe.indian;
const italiancuisine = recipes.main.recipe.italian;
const spreadscuisine = recipes.main.recipe.spreads;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Projects() {
  return (
    <Container fluid className="project-section">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
            <RecipeReviewCard imgPath={asiancuisine[0].imagepath} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
    </Container>

    // <Container fluid className="project-section">
    //   {/* <Particle /> */}
    //   <Container>
    //     <Typography variant="h4">
    //       Basics
    //     </Typography>
    //     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    //       {basiccuisine.map((value, index) => (
    //         <Col md={4} className="project-card">
    //           <ProjectCard
    //             imgPath={value.imagepath}
    //             isBlog={false}
    //             title={value.title}
    //             description={value.smallDescription}
    //             ingredients={value.ingredients}
    //             steps={value.steps}
    //           />
    //         </Col>
    //         ))
    //       }
    //     </Row>
    //   </Container>
    //   <Container>
    //     <Typography variant="h4">
    //       Asian Food
    //     </Typography>
    //     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    //     {asiancuisine.map((value, index) => (
    //       <Col md={4} className="project-card">
    //         <ProjectCard
    //           imgPath={value.imagepath}
    //           isBlog={false}
    //           title={value.title}
    //           description={value.smallDescription}
    //           ingredients={value.ingredients}
    //           steps={value.steps}
    //         />
    //       </Col>
    //       ))
    //     }
    //     </Row>
    //   </Container>
    //   <Container>
    //     <Typography variant="h4">
    //       Indian Food
    //     </Typography>
    //     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    //       {indiancuisine.map((value, index) => (
    //           <Col md={4} className="project-card">
    //             <ProjectCard
    //               imgPath={value.imagepath}
    //               isBlog={false}
    //               title={value.title}
    //               description={value.smallDescription}
    //               ingredients={value.ingredients}
    //               steps={value.steps}
    //             />
    //           </Col>
    //         ))
    //       }
    //     </Row>
    //   </Container>
    //   <Container>
    //     <Typography variant="h4">
    //       Italian Food
    //     </Typography>
    //     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    //       {italiancuisine.map((value, index) => (
    //           <Col md={4} className="project-card">
    //             <ProjectCard
    //               imgPath={value.imagepath}
    //               isBlog={false}
    //               title={value.title}
    //               description={value.smallDescription}
    //               ingredients={value.ingredients}
    //               steps={value.steps}
    //             />
    //           </Col>
    //         ))
    //       }
    //     </Row>
    //   </Container>
    //   <Container>
    //     <Typography variant="h3">
    //       Spreads
    //     </Typography>
    //     <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    //       {spreadscuisine.map((value, index) => (
    //           <Col md={4} className="project-card">
    //             <ProjectCard
    //               imgPath={value.imagepath}
    //               isBlog={false}
    //               title={value.title}
    //               description={value.smallDescription}
    //               ingredients={value.ingredients}
    //               steps={value.steps}
    //             />
    //           </Col>
    //         ))
    //       }
    //     </Row>
    //   </Container>
    // </Container>
  );
}

export default Projects;
