import Header from "../Components/Header.jsx"
import Galeria from "../Components/Galeria.jsx"

export default function Home(props) {

  return (

    <div className=''>
      <Header />
      <Galeria
        añadirPizza={props.añadirPizza}
      />
    </div>
  )
}