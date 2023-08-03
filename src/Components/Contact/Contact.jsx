import { useRef, useState } from "react"
import "./Contact.css"
import { useFirstActivation } from "../../hooks/useFirstActivation"
import emailjs from "@emailjs/browser"

const Contact = ({state}) => {
  const [isSending, setIsSending] = useState(false)

  useFirstActivation("contact", state)

  const form = useRef(null)
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ajzh9ce', 'template_xyvun5k', e.target, 'sIXy50I3C07pm9WK8')
      .then(res => {
        console.log(res)
        form.current.reset()
      })
      .catch(err => alert("No se puedo enviar el email, por favor vuelve a intentarlo más tarde"))
    ;
  }

  return (
    <div className={`page_contacto ${state}`} id="contact">
      <h2 className="title">Contacto</h2>
      <div className="content">
        <form ref={form} onSubmit={sendEmail}>
          <div className="input_container">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" className="form_input" id="nombre" name="nombre" />
          </div>
          <div className="input_container">
            <label htmlFor="email">Correo</label>
            <input type="email" className="form_input" id="email" name="email" />
          </div>
          <div className="input_container">
            <label htmlFor="asunto">Asunto</label>
            <input type="text" className="form_input" id="asunto" name="asunto" />
          </div>
          <div className="input_container">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea type="" className="form_input" id="mensaje" name="mensaje" />
          </div>
          <button type="submit" className="form_button">Enviar Email</button>
        </form>
      </div>
    </div>
  )
}

export default Contact