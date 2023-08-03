import "./Experiencia.css"
import { useFirstActivation } from "../../hooks/useFirstActivation";

const Experiencia = ({ state }) => {
  const {pageContentRef} = useFirstActivation(state, "show")

  return (
    <div className={`page_proyectos ${state}`} id="proyectos">
      <h2 className="title">Proyectos</h2>
      <div className="content" ref={pageContentRef}>
        
      </div>
    </div>
  )
}

export default Experiencia