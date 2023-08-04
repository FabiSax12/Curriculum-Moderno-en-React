import "./Proyectos.css"
import { useFirstActivation } from "../../hooks/useFirstActivation";

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
      </div>
    </div>
  )
}

export default Proyectos