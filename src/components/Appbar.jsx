import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "../css/appbar.css";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appBar">
        <Toolbar>
          <div className="linkAppBar">
            <LocalPizzaIcon className="iconMenuHome"></LocalPizzaIcon>
            <Link to="/home">
              <Typography variant="h4" className="fontLink">Pizzeria Mario Bros</Typography>
            </Link>
          </div>
          <div className="linkAppBar">
            <ShoppingCartIcon className="iconMenuCarrito" />
            <Link to="/carrito">
              <Typography variant="h4" className="fontLink">Carrito</Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
