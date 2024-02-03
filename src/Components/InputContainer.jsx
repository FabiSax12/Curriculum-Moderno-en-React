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
    <div className="mr-12 relative">
      <label
        htmlFor={registerName}
        className={
          // isInputFocused ? "label-focused" : inputValue ? "label-focused" : ""
          "block py-0 px-2 text-third absolute text-sm font-semibold transition-[all_.1s_ease] capitalize -top-5 left-3 select-none cursor-pointer"
        }
      >
        {labelText}
      </label>
      {nameTag === "input" ? (
        <input
          type={type}
          className="w-full py-2 px-4 border-[.125rem] border-solid border-third rounded-md outline-0 font-sans focus:border-primary"
          id={registerName}
          name={registerName}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          {...registerData}
        />
      ) : (
        <textarea
          className="resize-y w-full py-2 px-4 border-[.125rem] border-solid border-third rounded-md outline-0 font-sans focus:border-primary"
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
