import { useContext } from 'react';

import Context from '../Contex';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import "../assets/Css/Carrito.css"

export default function Carrito(){

    const { carrito } = useContext(Context);

    return(

        <div className='form-cont-vista-carrito'>
            <h3>Detalles del pedido:</h3>
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item >
                    <div className='cont-list-group'>
                        <div className='cont-pedido'>
                            <p>imagen</p>{carrito.img}
                            <p>nombre</p>{carrito.name}
                        </div>
                        <div className='cont-pedido'>
                            <p>precio*cantida</p>
                            <button>-</button>
                            <p>cantidad</p>
                            <button>+</button>
                        </div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
                <div>
                    <h3>Total:</h3>
                    <button>Ir a Pagar</button>
                </div>
            </Card>
            
        </div>

    )
}