import "./Proyectos.css"
import { useFirstActivation } from "../../hooks/useFirstActivation";
import ProyectCard from "../ProyectCard/ProyectCard";
import {faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap} from "@fortawesome/free-brands-svg-icons"

const Proyectos = ({ state }) => {
  const {pageContentRef} = useFirstActivation(state, "show")

  return (
    <div className={`page_proyectos ${state}`} id="proyectos">
      <h2 className="title">Proyectos</h2>
      <div className="content" ref={pageContentRef}>
        <nav>
          <ul className="filtros_proyectos">
            <li>Todos</li>
            <li>Personales</li>
            <li>Para Clientes</li>
            <li>Mini Proyectos</li>
          </ul>
        </nav>
        <div className="proyects_container">
          <ProyectCard 
            proyectName="Página de Popis"
            imageSrc="D:\Programación\Proyectos Web\.curriculum-moderno-react\src\assets\proyectos\Popis-React.PNG"
            icons={[faHtml5, faCss3Alt, faJsSquare]}
            repo="https://github.com/FabiSax12/Popis-React"
            link="https://popis-react.vercel.app"
          />
          <ProyectCard 
            proyectName="Agente de Ventas"
            imageSrc="D:\Programación\Proyectos Web\.curriculum-moderno-react\src\assets\foto-de-perfil.jpg"
            icons={[faHtml5, faCss3Alt]}
          />
          <ProyectCard 
            proyectName="4 en raya"
            imageSrc="D:\Programación\Proyectos Web\.curriculum-moderno-react\src\assets\foto-de-perfil.jpg"
            icons={[faReact, faBootstrap]}
          />
        </div>
      </div>
    </div>
  )
}

export default Proyectos