import "./Pages.css"
import Home from '../Inicio/Home'
import SobreMi from '../Sobre Mi/SobreMi'
import Formación from '../Curriculum/Formación'
import Experiencia from '../Experiencia/Experiencia'
import Contact from "../Contact/Contact"

const Páginas = ({ pageState }) => {

  return (
    <div className="pages">
      <Home state={pageState.home}/>
      <SobreMi state={pageState.user}/>
      <Formación state={pageState.curriculum}/>
      <Experiencia state={pageState.xp}/>
      <Contact state={pageState.contact}/>
    </div>
  )
}

export default Páginas