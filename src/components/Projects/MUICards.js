import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

export default function RecipeReviewCard(props) {
  console.log(props.ingredients)
  return (
    <Link to="/about" state={{ ingredients: props.ingredients, steps: props.steps, imgPath: props.imgPath }} style={{textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345, borderRadius: "12px", maxHeight: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.imgPath}
          alt="food"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.shortDiscription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
