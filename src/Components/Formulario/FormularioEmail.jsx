import "./FormularioEmail.css"
import { useForm } from 'react-hook-form'
import emailjs from "@emailjs/browser"
import InputContainer from '../InputContainer/InputContainer'

const FormularioEmail = ({reference, sendState: setIsSending}) => {
  const {register, handleSubmit, formState: {errors}} = useForm({mode: "onChange"})
  const inputs = ["nombre", "email", "asunto", "mensaje"];
  
  const onSumbmit = async (data) => {
    try {
      setIsSending(true);
      await emailjs.sendForm('service_ajzh9ce', 'template_xyvun5k', reference.current, 'sIXy50I3C07pm9WK8')
        .then(res => {
          setIsSending(false);
          
        })
      ;
      reference.current.reset()
    } catch(err) {
      alert("No se puedo enviar el email, por favor vuelve a intentarlo más tarde")
      console.log(err)
    }
  }

  return (
    <form ref={reference} >
      {inputs.map((input, idx) => (
        <InputContainer key={idx}
          nameTag = {input !== "mensaje" ? "input" : "textarea"}
          type = {input !== "email" ? "text" : "email"}
          registerName = {input}
          labelText = {input}
          registerData={register(input, { 
            required: true,
            pattern: input !== "email" ? null : /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
           })}
          errors={errors}
        />
        ))}
      <button type="submit" className="form_button" onClick={handleSubmit(onSumbmit)}>Enviar Email</button>
    </form>
  )
}

export default FormularioEmail