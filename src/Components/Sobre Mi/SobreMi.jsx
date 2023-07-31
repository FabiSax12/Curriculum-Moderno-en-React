import "./SobreMi.css"
import { useFirstActivation } from "../../hooks/useFirstActivation";

const SobreMi = ({ state }) => {
  useFirstActivation("sobreMi", state)

  return (
    <div className={`sobremi ${state}`} id="sobreMi">
      <h2 className="title">Sobre Mi</h2>
      <div className="content">
        <section className="sobremi__info-personal">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum neque ipsum animi inventore. Quae, obcaecati amet commodi nostrum iusto error? Ad facilis quo debitis vero voluptatum odit itaque eaque porro?</p>
          <div>
            <p><strong>Edad</strong> 18 años </p>
            <p><strong>País</strong> Costa Rica</p>
            <p><strong>Dirección</strong> La Caporal, Aguas Zarcas, San Carlos</p>
            <p><strong>Correo</strong> fabidev18@gmail.com</p>
            <p><strong>Teléfono</strong>+506 8516-0370</p>
          </div>
        </section>
        <section className="sobremi__aptitudes">
          <h2 className="sobremi__aptitudes_title">Aptitudes</h2>
          <ul className="sobremi__aptitudes_lista">
            <li>Deseo de aprender cosas nuevas</li>
            <li>Inteligente</li>
            <li>Responsable y puntual.</li>
            <li>Adaptación.</li>
            <li>Atento y buen oyente.</li>
            <li>Trabajo en equipo.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default SobreMi