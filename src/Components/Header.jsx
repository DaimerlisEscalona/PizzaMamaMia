import "../assets/Css/Header.css"

import imgpizza from "../assets/Img/imgpizza.jpg"

export default function Header() {

  return (
    <div className="form-cont-header">
      <div className='form-cont-img-header'>
        <img className="form-img-header" src={imgpizza} alt=""></img>
      </div>
      <div className="form-con-texto">
        <h1>¡Pizería Mamma Mia!</h1>
        <h3>¡Tenemos las mejores pizzas que podrás encontrar!</h3>
      </div>
    </div>
  )
}