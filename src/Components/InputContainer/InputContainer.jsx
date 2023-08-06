import InputMessage from "../Mensaje-de-input/InputMessage";
import "./InputContaienr.css"
import { useState } from "react";

function InputContainer({ nameTag = "input", type, registerName, labelText, registerData, errors }) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="input_container">
      <label
        htmlFor={registerName}
        className={isInputFocused ? "label-focused" : inputValue ? "label-focused" : ""}
      >
        {labelText}
      </label>
      {nameTag === "input" ? (
        <input
          type={type}
          className="form_input"
          id={registerName}
          name={registerName}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          {...registerData}
        />
      ) : (
        <textarea
          className="form_input"
          id={registerName}
          name={registerName}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          {...registerData}
          />
      )}
      {errors[registerName]?.type === "required" && <InputMessage mensaje="Este campo es obligatorio"/>}
      {errors[registerName]?.type === "pattern" && <InputMessage mensaje="El email no es válido"/>}
    </div>
  );
}

export default InputContainer