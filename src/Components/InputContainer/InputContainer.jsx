import React from 'react'

const InputContainer = ({nameTag = "input", type, registerName, labelText, registerData, errors}) => {
  return (
    <div className="input_container">
      <label htmlFor={registerName}>{labelText}</label>
      {nameTag === "input" ?
        <input 
          type={type} 
          className="form_input" 
          id={registerName} 
          name={registerName} 
          {...registerData}
        /> :
        <textarea 
          className="form_input" 
          id={registerName} 
          name={registerName} 
          {...registerData}
        />
      }
      {errors[registerName]?.type === "required" && <h4>REQUERIDO</h4>}
      {errors[registerName]?.type === "pattern" && <h4>Email Inválido</h4>}
    </div>
  )
}

export default InputContainer