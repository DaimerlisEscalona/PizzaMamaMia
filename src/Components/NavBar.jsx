import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import pizza from "../assets/Img/pizza.png"
import verificar from "../assets/Img/verificar.png"
import "../assets/Css/Navbar.css"

export default function NavBar() {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (

        <Navbar className='form-cont-navbar' bg="" variant="">
            <div className="form-cont-img-pizza">
                <img className="form-img-navbar" src={pizza} alt=""></img>
            </div>
            <NavLink className={setActiveClass} to="/">Pizería Mamma Mia!</NavLink>
            <Nav className=" justify-content-end container me-auto">
                <div className='form-cont-img-carrito'>
                    <img className="form-img-navbar" src={verificar} alt=""></img>
                </div>
                <NavLink className={setActiveClass} to="/carrito">
                    Carrito
                </NavLink>
            </Nav>
        </Navbar>

    )
}
