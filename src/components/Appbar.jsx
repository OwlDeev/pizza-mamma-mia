import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import "../css/appbar.css";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { Context } from "../Context";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

export default function Appbar() {
  const { carrito } = useContext(Context);
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");

  function calcularTotal(){
    var totalCarrito = 0;
    for (const pizzasCarrito of carrito) {
      totalCarrito = totalCarrito + pizzasCarrito.price;
    }
    return totalCarrito;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <div className="linkAppBar">
            <LocalPizzaIcon className="iconMenuHome"></LocalPizzaIcon>
            <NavLink className={setActiveClass} to="/home">
              <div className="titleNav">Mario's Pizza</div>
            </NavLink>
          </div>
          <div className="linkAppBar">
            <NavLink className={setActiveClass} to="/carrito">
              {carrito.length >= 1 ? <ShoppingCartCheckoutIcon className="iconMenuCarrito" /> :<ShoppingCartIcon className="iconMenuCarrito" />}
              
              <div className="titleCountCarrito">{' $ ' + calcularTotal()}</div>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
