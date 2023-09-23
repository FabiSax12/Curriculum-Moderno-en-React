import InputMessage from "./InputMessage";
import { useState } from "react";

function InputContainer({
  nameTag = "input",
  type,
  registerName,
  labelText,
  registerData,
  errors,
}) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="input_container">
      <label
        htmlFor={registerName}
        className={
          // isInputFocused ? "label-focused" : inputValue ? "label-focused" : ""
          "label-focused"
        }
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
      {errors[registerName] && (
        <InputMessage mensaje={errors[registerName].message} />
      )}
    </div>
  );
}

export default InputContainer;
