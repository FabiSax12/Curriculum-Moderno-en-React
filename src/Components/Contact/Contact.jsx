import { useRef, useState } from "react"
import "./Contact.css"
import LoadSpin from "../Load-Spin/LoadSpin"
import emailjs from "@emailjs/browser"
import { useFirstActivation } from "../../hooks/useFirstActivation"

const Contact = ({state}) => {
  const [isSending, setIsSending] = useState(false)
  const contentRef = useRef()
  const {pageContentRef} = useFirstActivation(state, "show")

  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs.sendForm('service_ajzh9ce', 'template_xyvun5k', form.current, 'sIXy50I3C07pm9WK8')
      .then(res => {
        setIsSending(false);
        form.current.reset();
      })
      .catch(err => alert("No se puedo enviar el email, por favor vuelve a intentarlo más tarde"))
    ;
  }

  return (
    <div className={`page_contacto ${state}`} id="contact" >
      <h2 className="title">Contacto</h2>
      <div className="content" ref={pageContentRef}>
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
        <LoadSpin state={isSending ? "active" : "inactive"}/>
      </div>
    </div>
  )
}

export default Contact