import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const Context = createContext();

export const Provider = ({ children }) => {
  //UseEffect
  useEffect(() => {
    // Make a request for a user with a given ID
    async function getUser() {
      let url = 'https://owldeev.github.io/pizza-mamma-mia/pizzas.json';
      let reqOptions = {
        url: url,
        method: "GET",
      };

      let response = await axios.request(reqOptions);
      setPizza(response.data);
    }

    getUser();
  }, []);

  //UseState
  const [pizzas, setPizza] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const globalState = { pizzas, setPizza, carrito, setCarrito};

  return <Context.Provider value={globalState}>{children}</Context.Provider>;
};
