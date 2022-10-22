import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

import Context from '../Contex';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';

import ojos from "../assets/Img/ojos.png";
import verificar from "../assets/Img/verificar.png";

import "../assets/Css/Galeria.css"

export default function Home() {

    const { pizza, setDetallePizza, carrito, setCarritto } = useContext(Context);
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const verMas = (id2) => {

        navigate(`/pizza/${id2}`);

    }

    const añadirPizza = (e) =>{

        setCarritto([...carrito, e]);
        console.log(carrito)
    }

    return (

        <div className='form-cont-pizzas'>
            <Row xs={1} md={4} className="g-4">
                {pizza.map((e) => (
                    <Col key={e.id} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className="" variant="top" src={e.img} />
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                <ListGroup.Item >{e.name}</ListGroup.Item>
                                    Ingredientes
                                    <ListGroup.Item >{e.ingredients[0]}</ListGroup.Item>
                                    <ListGroup.Item >{e.ingredients[1]}</ListGroup.Item>
                                    <ListGroup.Item >{e.ingredients[2]}</ListGroup.Item>
                                    <ListGroup.Item >{e.ingredients[3]}</ListGroup.Item>
                                </ListGroup>
                                <h3 className='form-titulo'>{e.price.toLocaleString('en-EN', { style: 'currency', currency: 'CLP' })}</h3>
                                <div className='form-cont-gen-button'>
                                    <div className='form-cont-ver-mas'>
                                        <a className='color-ver-mas' 
                                            onClick={() => (setId(e.id), verMas(e.id), setDetallePizza(e))}>
                                            Ver Más 
                                            <img className="form-img-button" src={ojos} />
                                        </a>
                                    </div>
                                    <div className='form-cont-agregar'>
                                        <a className='color-agregar'
                                            onClick={() => ( añadirPizza(e))}>
                                            Añadir
                                            <img className="form-img-button" src={verificar} />
                                        </a>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}