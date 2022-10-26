import { useContext } from 'react';

import Context from '../../Contex';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import "./Carrito.css"

export default function Carrito(props) {

    const { carrito } = useContext(Context);

    return (

        <div className='form-cont-vista-carrito'>
            <h4 className='form-tit-carrito'>Detalles del pedido:</h4>
            <ListGroup variant="flush">
                {carrito.map((cpizza) => (
                    <ListGroup.Item key={cpizza.id}>
                        <div className='cont-detalle-carrito'>
                            <div className='cont-info-pedido'>
                                <Card.Img className="form-img-carrito" src={cpizza.img} variant="top" />
                                <h5 className='form-name-carrito'>{cpizza.name}</h5>
                            </div>
                            <div className='cont-pedido'>
                                <p className='form-name-carrito'>{cpizza.qty * cpizza.price}</p>
                                <Button className='color-eliminar-carrito' onClick={() => (props.borrarPizza(cpizza))} variant="danger">-</Button>{' '}
                                <h5 className='form-name-carrito'>{cpizza.qty}</h5>
                                <Button className='color-agregar-carrito' onClick={() => (props.añadirPizza(cpizza))} variant="info">+</Button>{' '}
                            </div>
                        </div>
                    </ListGroup.Item>

                ))}
            </ListGroup>
            <div className='form-cont-total'>
                <h3 className='form-total'>
                    Total: {props.totalProduct.toLocaleString('en-EN', { style: 'currency', currency: 'CLP' })}
                </h3>
                <Button variant="success">Ir a Pagar</Button>{' '}
            </div>
        </div>
    )
}
