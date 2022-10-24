import { useContext } from 'react';

import Context from '../Contex';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import "../assets/Css/DetallePizza.css"
import verificar from "../assets/Img/verificar.png"
import pizzalista from "../assets/Img/pizzalista.png"

export default function DetallePizza(props) {

  const { detallePizza } = useContext(Context);

  return (

    <div className="form-cont-card">
      <div className="form-cont-img-card">
        <Card.Img className="form-img-card" src={detallePizza.img} variant="top" />
      </div>
      <Card.Body className="form-body" >
        <ListGroup className="list-group-flush">
          <ListGroup.Item >
            <h4 className='form-name'>{detallePizza.name}</h4>
          </ListGroup.Item>
          <p className='form-parrafo'>{detallePizza.desc}</p>
          <ul className='form-ul'>
            <h6>Ingredientes</h6>
            <li className='form-lista'>
              <img className="form-img-list" src={pizzalista} alt=""></img>
              {detallePizza.ingredients[0]}
            </li>
            <li className='form-lista'>
              <img className="form-img-list" src={pizzalista} alt=""></img>
              {detallePizza.ingredients[1]}
            </li>
            <li className='form-lista'>
              <img className="form-img-list" src={pizzalista} alt=""></img>
              {detallePizza.ingredients[2]}
            </li>
            <li className='form-lista'>
              <img className="form-img-list" src={pizzalista} alt=""></img>
              {detallePizza.ingredients[3]}
            </li>
          </ul>
          <div className='form-precio-añadir'>
            <h3 className='form-titulo'>
              Precio: {detallePizza.price.toLocaleString('en-EN', { style: 'currency', currency: 'CLP' })}
            </h3>
            <div className='form-cont-agregar'>
              <a className='color-agregar'
                onClick={() => (props.añadirPizza(detallePizza))}>
                Añadir
                <img className="form-img-button" src={verificar} />
              </a>
            </div>
          </div>
        </ListGroup>
      </Card.Body>
    </div>

  )
}