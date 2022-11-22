import React from "react";
import { Container } from "react-bootstrap";
import recipes from "../../recipes/recipes.json";
import { Box, Grid, Typography } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import RecipeReviewCard from "./MUICards";
import SearchIcon from '@mui/icons-material/Search';

const asiancuisine = recipes.main.recipe.asiancuisine;
const basiccuisine = recipes.main.recipe.basics;
const indiancuisine = recipes.main.recipe.indian;
const italiancuisine = recipes.main.recipe.italian;
const spreadscuisine = recipes.main.recipe.spreads;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '12px',
  border: 'solid',
  borderWidth: 'thin',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '10%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '20%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Projects() {
  return (
    <Container fluid className="project-section" style={{ minHeight: "100vh" }}>
      <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Grid>
      <Box sx={{ marginTop: "50px" }}>
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
