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
      {errors[registerName]?.type === "required" && <h4>REQUERIDO</h4>}
      {errors[registerName]?.type === "pattern" && <h4>Email Inválido</h4>}
    </div>
  );
}

export default InputContainer