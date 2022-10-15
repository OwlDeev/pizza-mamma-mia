import "./css/App.css";
import Appbar from "./components/Appbar";
import { Typography } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";
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
          </Routes>
        </BrowserRouter>
      </Provider>

      <footer>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} p={1}>
          © 1998-2016 Developer OwlDev. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
}
