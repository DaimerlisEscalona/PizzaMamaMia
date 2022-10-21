import { useContext } from 'react';

import Context from '../Contex';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Carrito(){

    const { carrito } = useContext(Context);

    return(

        <div>
            <h3>Detalles del pedido:</h3>
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        {carrito.name}
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            <h3>Total:</h3>
            <button>Ir a Pagar</button>
        </div>

    )
}