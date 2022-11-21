import React from "react";
import { Container} from "react-bootstrap";
import recipes from "../../recipes/recipes.json";
import { Box, Grid, Typography } from "@mui/material";
import RecipeReviewCard from "./MUICards";

const asiancuisine = recipes.main.recipe.asiancuisine;
const basiccuisine = recipes.main.recipe.basics;
const indiancuisine = recipes.main.recipe.indian;
const italiancuisine = recipes.main.recipe.italian;
const spreadscuisine = recipes.main.recipe.spreads;


function Projects() {
  return (
    <Container fluid className="project-section" style={{ minHeight: "100vh" }}>
      <Box sx={{marginBottom: "20px"}}>
        <Typography variant="h4" sx={{marginBottom: "12px"}}>Basics</Typography>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {basiccuisine.map((value, index) => (
            <Grid item>
              <RecipeReviewCard
                imgPath={value.imagepath}
                title={value.title}
                duration={value.duration}
                shortDiscription={value.smallDescription}
                ingredients={value.ingredients}
                steps={value.steps}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{marginBottom: "20px"}}>
        <Typography variant="h4" sx={{marginBottom: "12px"}}>Japan</Typography>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {asiancuisine.map((value, index) => (
            <Grid item>
              <RecipeReviewCard
                imgPath={value.imagepath}
                title={value.title}
                duration={value.duration}
                shortDiscription={value.smallDescription}
                ingredients={value.ingredients}
                steps={value.steps}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{marginBottom: "20px"}}>
        <Typography variant="h4" sx={{marginBottom: "12px"}}>Indian</Typography>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {indiancuisine.map((value, index) => (
            <Grid item>
              <RecipeReviewCard
                imgPath={value.imagepath}
                title={value.title}
                duration={value.duration}
                shortDiscription={value.smallDescription}
                ingredients={value.ingredients}
                steps={value.steps}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{marginBottom: "20px"}}>
        <Typography variant="h4" sx={{marginBottom: "12px"}}>Italian</Typography>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {italiancuisine.map((value, index) => (
            <Grid item>
              <RecipeReviewCard
                imgPath={value.imagepath}
                title={value.title}
                duration={value.duration}
                shortDiscription={value.smallDescription}
                ingredients={value.ingredients}
                steps={value.steps}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{marginBottom: "20px"}}>
        <Typography variant="h4" sx={{marginBottom: "12px"}}>Spreads</Typography>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {spreadscuisine.map((value, index) => (
            <Grid item>
              <RecipeReviewCard
                imgPath={value.imagepath}
                title={value.title}
                duration={value.duration}
                shortDiscription={value.smallDescription}
                ingredients={value.ingredients}
                steps={value.steps}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Projects;
