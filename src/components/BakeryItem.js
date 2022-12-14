import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function BakeryItem(props) {
  return (
    <Card sx={{ width: 345, m: 1 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt={props.name + " image"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography>{props.price}</Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button variant="contained" onClick={props.addItem}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
