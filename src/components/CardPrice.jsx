import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../css/cardPrice.css";
import VirtualizedList from "./VirtualizedList";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

export default function CardPrice({ name, img, ingredients, price }) {
  const navigate = useNavigate();
  const { pizzas } = useContext(Context);

  function goToPizza(namePizza) {
    const urlName = namePizza.target.parentElement.parentElement.parentElement.children[1].firstChild.textContent
    for (const pizza of pizzas) {
      if (urlName === pizza.name) {
        navigate(`/pizza/${pizza.index}`);
      }
    }
  }

  return (
    <Card className="cardMain">
      <CardMedia component="img" height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" id="idCard">
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
          <Button
            variant="contained"
            size="large"
            onClick={(e) => goToPizza(e)}
          >
            Mas Info
          </Button>
        </div>
        <div className="buttonAction">
          <Button variant="contained" size="large" color="success">
            Anadir <ShoppingCartIcon></ShoppingCartIcon>
          </Button>
        </div>
      </div>
    </Card>
  );
}
