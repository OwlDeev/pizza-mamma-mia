import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import "../css/appbar.css";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

export default function Appbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <div className="linkAppBar">
            <LocalPizzaIcon className="iconMenuHome"></LocalPizzaIcon>
            <NavLink className={setActiveClass} to="/home">
              <Typography variant="h4">Mario's Pizza</Typography>
            </NavLink>
          </div>
          <div className="linkAppBar">
            <ShoppingCartIcon className="iconMenuCarrito" />
            <NavLink className={setActiveClass} to="/carrito">
              <Typography variant="h4">Carrito</Typography>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
