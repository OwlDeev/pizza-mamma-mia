import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../css/cardPrice.css";
import VirtualizedList from "./VirtualizedList";

export default function CardPrice({ name, img, ingredients, price }) {
  return (
    <Card className="cardMain">
      <CardMedia component="img" height="140" image={img} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <center>{name}</center>
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Ingredientes:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <VirtualizedList pizzaList={ingredients}></VirtualizedList>
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          <center>{"$ " + price}</center>
        </Typography>
      </CardContent>
      <div className="cardActions">
        <div className="buttonAction">
          <Button size="large">Ver mas</Button>
        </div>
        <div className="buttonAction">
          <Button size="large">Anadir</Button>
        </div>
      </div>
    </Card>
  );
}
