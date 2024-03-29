import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

import pizza from "../../assets/Img/pizza.png"
import verificar from "../../assets/Img/verificar.png"
import "./Navbar.css"

export default function NavBar(props) {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (

        <Navbar className='form-cont-navbar' bg="" variant="">
            <div className='form-cont-nombre'>
                <div className="form-cont-img-pizza">
                    <img className="form-img-navbar" src={pizza} alt=""></img>
                </div>
                <NavLink className={setActiveClass} to="/">
                    <h4 className='form-tit-navbar'>
                        Pizería Mamma Mia!
                    </h4>
                </NavLink>
            </div>
            <div className='form-cont-carrito'>
                <div className='form-cont-img-carrito'>
                    <img className="form-img-navbar" src={verificar} alt=""></img>
                </div>
                <NavLink className={setActiveClass} to="/carrito">
                    <h4 className='form-tit-navbar'>
                        {props.totalProduct.toLocaleString('en-EN', { style: 'currency', currency: 'CLP' })}
                    </h4>
                </NavLink>
            </div>
        </Navbar>

    )
}
