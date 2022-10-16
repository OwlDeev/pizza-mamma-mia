import React from "react";
import "../css/pizza.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../Context";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

function Pizza() {
  const { id } = useParams();
  const { pizzas } = useContext(Context);
  var pizzaSelected = [];

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

  return (
    <Box sx={{ flexGrow: 1 }} className='boxMainPizza'>
      <Grid container>
        <Grid xs={6}>
          <div className="divImgPizza">
            <img src={getImg()} className="imgPizza"></img>
          </div>
        </Grid>
        <Grid xs={6}>
          <div className="divMenuPizza">Menu de la pizza</div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Pizza;
