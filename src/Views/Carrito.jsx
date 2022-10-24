import { useContext } from 'react';

import Context from '../Contex';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import "../assets/Css/Carrito.css"

export default function Carrito(props) {

    const { carrito } = useContext(Context);
    

    return (

        <div className='form-cont-vista-carrito'>
            <h3>Detalles del pedido:</h3>
                <Card style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        {carrito.map((cpizza) => (
                            <ListGroup.Item key={cpizza.id} >
                                <div className='cont-list-group'>
                                    <div className='cont-pedido'>
                                        <Card.Img className="form-img-carrito" src={cpizza.img} variant="top" />
                                        <h6 className='form-name-carrito'>{cpizza.name}</h6>
                                    </div>
                                    <div className='cont-pedido'>
                                        <p>cantidad por total</p>
                                        {/* {totalProduct.toLocaleString('en-EN', { style: 'currency', currency: 'CLP' })} */}
                                        <button>-</button>
                                        {cpizza.qty}
                                        <button onClick={() => (props.añadirPizza(cpizza))}>+</button>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>

                </Card>
            
            <div>
                <h3>Total: {props.totalProduct.toLocaleString('en-EN', { style: 'currency', currency: 'CLP' })}
                </h3>
                <button>Ir a Pagar</button>
            </div>
        </div>

    )
}