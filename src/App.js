import "./css/App.css";
import Appbar from "./components/Appbar";
import { Typography } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";
import {Provider} from "./Context";

export default function App()  {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Appbar></Appbar>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/pizza-mamma-mia" element={<Home />} />u
            <Route path="/home" element={<Home />} />
            <Route path="/Carrito" element={<Carrito></Carrito>} />
            <Route path="/pizza/:id" element={<Pizza></Pizza>} />
          </Routes>
        </BrowserRouter>
      </Provider>

      <footer className="footer">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} p={1}>
          <center>© 2016-2022 Developer OwlDev. All rights reserved.</center>
        </Typography>
      </footer>
    </div>
  );
}
