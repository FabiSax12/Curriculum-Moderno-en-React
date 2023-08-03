import "./Experiencia.css"
import { useFirstActivation } from "../../hooks/useFirstActivation";

const Experiencia = ({ state }) => {
  useFirstActivation("proyectos", state)

  return (
    <div className={`page_proyectos ${state}`} id="proyectos">
      <h2 className="title">Proyectos</h2>
      <div className="content">
        
      </div>
    </div>
  )
}

export default Experiencia