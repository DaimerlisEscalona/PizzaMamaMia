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

  return (
    <div className="App">
      <Context.Provider value={sharedState}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<DetallePizza />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
