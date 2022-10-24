import { useContext } from 'react';

import Context from '../Contex';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import "../assets/Css/Carrito.css"

export default function Carrito(props) {

    const { carrito } = useContext(Context);
    const totalProduct = carrito.reduce((a, c) => a + c.qty * c.price, 0);

    return (

        <div className='form-cont-vista-carrito'>
            <h3>Detalles del pedido:</h3>
            {carrito.map((cpizza) => (
                <Card key={cpizza.id} style={{ width: '18rem' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item >
                            <div className='cont-list-group'>
                                <div className='cont-pedido'>
                                    <Card.Img className="form-img-carrito" src={cpizza.img} variant="top" />
                                    <h6 className='forma-name-carrito'>{cpizza.name}</h6>
                                </div>
                                <div className='cont-pedido'>
                                    {totalProduct.toLocaleString('en-EN', { style: 'currency', currency: 'CLP' })}
                                    <button>-</button>
                                    {cpizza.qty}
                                    <button onClick={() => (props.añadirPizza(cpizza))}>+</button>
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>

                </Card>
            ))}
            <div>
                <h3>Total:</h3>
                <button>Ir a Pagar</button>
            </div>
        </div>

    )
}