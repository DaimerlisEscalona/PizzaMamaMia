import { useContext } from 'react';

import Context from '../Contex';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import "../assets/Css/DetallePizza.css"
import verificar from "../assets/Img/verificar.png"

export default function DetallePizza() {

  const { detallePizza } = useContext(Context);

  return (

    <div className="form-cont-card">
      <div className="form-cont-img-card">
        <Card.Img className="form-img-card" src={detallePizza.img} variant="top" />
      </div>
      <Card.Body className="form-body" >
        <Card.Title>{detallePizza.name}</Card.Title>
        <Card.Text>{detallePizza.desc}</Card.Text>
        {/* {detallePizza.map((e) => ( */}
        <ListGroup className="list-group-flush">
          <ListGroup.Item >{detallePizza.ingredients}</ListGroup.Item>
        </ListGroup>
        {/* ))} */}
        <h3 className='form-titulo'>Precio: ${detallePizza.price}</h3>
        <div className='form-cont-agregar'>
          <a className='color-agregar'>Añadir
            <img className="form-img-button" src={verificar}/>
          </a>
        </div>
      </Card.Body>
    </div>

  )
}