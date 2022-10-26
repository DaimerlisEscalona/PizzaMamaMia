import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Context from "./Contex";

import NavBar from "../src/Components/Navbar/NavBar.jsx"
import Home from "./Views/Home/Home"
import DetallePizza from "../src/Views/DetallePizza/DetallePizza.jsx";
import Carrito from "./Views/Carrito/Carrito.jsx"

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [pizza, setPizza] = useState([]);
  const [detallePizza, setDetallePizza] = useState([]);
  const [carrito, setCarritto] = useState([]);
  const totalProduct = carrito.reduce((a, c) => a + c.qty * c.price, 0);
  const sharedState = { pizza, setPizza, detallePizza, setDetallePizza, carrito, setCarritto };


  const consultarJson = async () => {

    const endpoint = "./pizzas.json"
    const url = `http://localhost:3000/${endpoint}`
    const response = await fetch(url)
    const data = await response.json()
    setPizza(data)

  }

  useEffect(() => {

    consultarJson()

  }, [])

  const añadirPizza = (p) => {

    const existence = carrito.find((x) => x.id === p.id);

    if (carrito.find((x) => x.id === p.id)) {
      setCarritto(
        carrito.map((x) =>
          x.id === p.id ? { ...existence, qty: existence.qty + 1 } : x
        )
      );
    } else {
      setCarritto([...carrito, { ...p, qty: 1 }]);
    }

  }

  const borrarPizza = (p) => {

    const exist = carrito.find((x) => x.id === p.id);
    if (exist.qty === 1) {
      setCarritto(carrito.filter((x) => x.id !== p.id));
    } else {
      setCarritto(
        carrito.map((x) =>
          x.id === p.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }

  return (
    <div className="App">
      <Context.Provider value={sharedState}>
        <BrowserRouter>
          <NavBar
            totalProduct={totalProduct}
          />
          <Routes>
            <Route path="/" element={<Home
              añadirPizza={añadirPizza}
            />} />
            <Route path="/pizza/:id" element={<DetallePizza
              añadirPizza={añadirPizza}
            />} />
            <Route path="/carrito" element={<Carrito
              añadirPizza={añadirPizza}
              borrarPizza={borrarPizza}
              totalProduct={totalProduct}
            />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
