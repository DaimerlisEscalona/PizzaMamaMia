import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Context from "./Contex";

import NavBar from "./Components/NavBar"
import Home from "./Views/Home"
import DetallePizza from "./Views/DetallePizza";
import Carrito from "./Views/Carrito.jsx"
import Footer from "./Components/Footer.jsx"

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [pizza, setPizza] = useState([]);
  const [detallePizza, setDetallePizza] = useState([]);
  const [carrito, setCarritto] = useState([]);
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

  return (
    <div className="App">
      <Context.Provider value={sharedState}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home
              añadirPizza={añadirPizza}
            />} />
            <Route path="/pizza/:id" element={<DetallePizza
              añadirPizza={añadirPizza}
            />} />
            <Route path="/carrito" element={<Carrito
              añadirPizza={añadirPizza}
            />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
