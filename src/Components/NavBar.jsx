import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pizza from "../assets/Img/pizza.png"
import verificar from "../assets/Img/verificar.png"
import "../assets/Css/Navbar.css"

export default function NavBar() {

    return(

        <Navbar className='form-cont-navbar' bg="" variant="">
                <div className="form-cont-img">
                    <img className="form-img" src={pizza} alt=""></img>
                    <Navbar.Brand href="#home"> Pizería Mamma Mia!</Navbar.Brand>
                </div>
                <div className='form-cont-carrito '>
                    <div className='form-cont-img'>
                        <img className="form-img" src={verificar} alt=""></img>
                    </div>
                    <Nav.Link href="#home">Carrito</Nav.Link>   
                </div>
        </Navbar>
      

    )
}
