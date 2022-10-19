import React from "react";
import "../css/pizza.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SimpleAccordion from "../components/SimpleAccordion";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Pizza() {
  const { id } = useParams();
  const { pizzas, carrito, setCarrito } = useContext(Context);
  var pizzaSelected = [];

  function pizzaCharacter(idPizza) {
    switch (idPizza) {
      case "P006":
        return require("../imgs/warioLogo.png");

      case "P005":
        return require("../imgs/bowserLogo.png");

      case "P004":
        return require("../imgs/marioLogo.png");

      case "P003":
        return require("../imgs/luigiLogo.png");

      case "P002":
        return require("../imgs/toadLogo.png");

      case "P001":
        return require("../imgs/toaddetteLogo.png");
    }
  }

  function getAllPokemon() {
    for (const pizza of pizzas) {
      if (pizza.id === id) {
        pizzaSelected.push(pizza);
      }
    }
  }

  function getImg() {
    getAllPokemon();
    return pizzaSelected[0].img;
  }

  function addCarrito(pizza) {
    for (const pizza of pizzas) {
      if (id === pizza.id) {
        var listCarrito = [pizza, ...carrito]
        setCarrito(listCarrito);
      }
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }} className="boxMainPizza">
      <Grid container>
        <Grid xs={6}>
          <div className="divImgPizza">
            <img src={getImg()} className="imgPizza"></img>
          </div>
        </Grid>
        <Grid xs={6}>
          <div className="divMenuPizza">
            <div className="textTitle">{pizzaSelected[0].name}</div>
            <div className="textDecription">{pizzaSelected[0].desc}</div>
            <div className="divIngredientsAndAdd">
              <div className="divAccordion">
                <SimpleAccordion
                  ingredients={pizzaSelected[0].ingredients}
                ></SimpleAccordion>
              </div>
              <div className="buttonAdd">
                <Button
                  variant="contained"
                  size="large"
                  color="success"
                  onClick={(e) => addCarrito(e)}
                >
                  Anadir <ShoppingCartIcon></ShoppingCartIcon>
                </Button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid xs={12}>
          <div className="divImgFooter">
            <img src={pizzaCharacter(id)} className="imgFooter"></img>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Pizza;
