import React from "react";
import "../css/carrito.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { useContext, useEffect } from "react";
import { Context } from "../Context";
import Button from "@mui/material/Button";

function Carrito() {
  var carritoFiltrado = [];
  var removePizzaCarrito = 0;
  const { pizzas, carrito, setCarrito } = useContext(Context);

  function calcularTotal() {
    var totalCarrito = 0;
    for (const pizzasCarrito of carrito) {
      totalCarrito = totalCarrito + pizzasCarrito.price;
    }
    return totalCarrito;
  }

  function getCantidadPizza(idPizza) {
    var getCantidad = 0;

    for (const pizzaCarrito of carrito) {
      if (pizzaCarrito.id === idPizza) {
        getCantidad = getCantidad + 1;
      }
    }

    return getCantidad;
  }

  function getTotalPizza(idPizza) {
    var getTotalCantidad = 0;

    for (const pizzaCarrito of carrito) {
      if (pizzaCarrito.id === idPizza) {
        getTotalCantidad = getTotalCantidad + pizzaCarrito.price;
      }
    }

    return getTotalCantidad;
  }

  function eliminaDuplicados(arr) {
    const unicos = [];

    for (var i = 0; i < arr.length; i++) {
      const elemento = arr[i];

      if (!unicos.includes(arr[i])) {
        unicos.push(elemento);
      }
    }

    carritoFiltrado = unicos;
  }

  function addPizza(component) {
    var namePizzaSelected =
      component.parentNode.parentNode.parentNode.firstChild.textContent;

    for (const pizza of pizzas) {
      if (pizza.name === namePizzaSelected) {
        var newListPizza = [...carrito, pizza];
        setCarrito(newListPizza);
      }
    }
  }

  function removePizza(component) {
    var namePizzaSelected =
      component.parentNode.parentNode.parentNode.firstChild.textContent;
    var pizzaIndex = 0;
    var theFirstObject = 0;
    for (const pizzaCarrito of carrito) {
      if (pizzaCarrito.name === namePizzaSelected && theFirstObject < 1) {
        pizzaIndex = carrito.indexOf(pizzaCarrito);
        theFirstObject = theFirstObject + 1;
      }
    }
    var listCarrito = [...carrito];
    listCarrito.splice(pizzaIndex, 1);
    setCarrito(listCarrito);
  }

  useEffect(() => {
    setCarrito(carrito);
  })

  return (
    <Box sx={{ flexGrow: 1 }} className="boxMainCarrito">
      <Grid container>
        <Grid xs={12}>
          <div className="divDivider"></div>
        </Grid>
        <Grid xs={6}>
          <div className="divCarrito">
            <div className="titleDetail">Detalle del pedido :</div>
            <div className="divDetail">
              {eliminaDuplicados(carrito)}
              {carritoFiltrado.map((pizzaCarrito) => (
                <div className="divPizzaDetail">
                  <div className="divImgDetail">
                    <img src={pizzaCarrito.img} className="imgCarrito"></img>
                    <div className="divNameImgDetail">{pizzaCarrito.name}</div>
                  </div>
                  <div className="priceDetail">
                    <div id="totalPizza">
                      {" "}
                      {"$" + getTotalPizza(pizzaCarrito.id)}
                    </div>
                    <div className="buttonAddRemove">
                      <Button
                        variant="contained"
                        onClick={(e) => addPizza(e.target)}
                      >
                        {" "}
                        +{" "}
                      </Button>
                    </div>
                    <div id="cantidadPizza">
                      {" "}
                      {getCantidadPizza(pizzaCarrito.id)}
                    </div>
                    <div className="buttonAddRemove">
                      <Button
                        variant="contained"
                        onClick={(e) => removePizza(e.target)}
                      >
                        {" "}
                        -{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid xs={6}>
          <div className="divPago">
            <div className="titleDivPago">TOTAL</div>
            <div className="priceDivPago">{calcularTotal()}</div>
            <div>
              <Button variant="contained">IR A PAGAR</Button>
            </div>
          </div>
        </Grid>
        <Grid xs={12}>
          <div className="divDivider"></div>
        </Grid>
        <Grid xs={12}>
          <img
            className="imgFooterCarrito"
            src="https://fs-prod-cdn.nintendo-europe.com/media/images/08_content_images/games_6/nintendo_switch_download_software_3/nswitchds_supermariobros35_1/CI_NSwitchDS_SuperMarioBros35_StageBackground_Level2_Mobile.jpg"
          ></img>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Carrito;
