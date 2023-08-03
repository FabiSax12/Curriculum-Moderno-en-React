import "./Contact.css"
import { useFirstActivation } from "../../hooks/useFirstActivation"

const Contact = ({state}) => {
  useFirstActivation("contact", state)

  return (
    <div className={`page_contacto ${state}`} id="contact">
      <h2 className="title">Contacto</h2>
      <div className="content">
        <form action="">
          <div className="input_container">
            <label htmlFor="email">Correo</label>
            <input type="email" className="form_input" id="email"  />
          </div>
          <div className="input_container">
            <label htmlFor="asunto">Asunto</label>
            <input type="text" className="form_input" id="asunto"  />
          </div>
          <div className="input_container">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea type="" className="form_input" id="mensaje"  />
          </div>
          <button type="button" className="form_button">Enviar Email</button>
        </form>
      </div>
    </div>
  )
}

export default Contact