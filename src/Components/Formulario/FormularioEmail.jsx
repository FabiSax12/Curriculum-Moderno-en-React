import React from 'react'
import { useForm } from 'react-hook-form'
import "./FormularioEmail.css"

const FormularioEmail = () => {
  const {register, handleSubmit, formState: {errors}} = useForm()

  const submitData = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(submitData)}>
      <div className="input_container">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" className="form_input" id="nombre" name="nombre" {...register("nombre", {required: true})}/>
        {errors.nombre?.type === "required" && <p>Error</p>}
      </div>
      <div className="input_container">
        <label htmlFor="email">Correo</label>
        <input type="email" className="form_input" id="email" name="email" 
          {...register("email", {required: true, pattern:  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ })}
        />
        {errors.email?.type === "required" && <p>Error</p>}
        {errors.email?.type === "pattern" && <p>Email Inválido</p>}
      </div>
      <div className="input_container">
        <label htmlFor="asunto">Asunto</label>
        <input type="text" className="form_input" id="asunto" name="asunto" {...register("asunto", {required: true})}/>
        {errors.asunto?.type === "required" && <p>Error</p>}
      </div>
      <div className="input_container">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea className="form_input" id="mensaje" name="mensaje" {...register("mensaje", {required: true})}/>
        {errors.mensaje?.type === "required" && <p>Error</p>}
      </div>
      <button type="submit" className="form_button">Enviar Email</button>
    </form>
  )
}

export default FormularioEmail