import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import LoadSpin from "./LoadSpin";
import InputContainer from "./InputContainer";
import EmailPreview from "./EmailPreview";

const EmailForm = () => {
  const [isSending, setIsSending] = useState(false);
  const form = useRef();
  const inputs = ["nombre", "email", "asunto", "mensaje"];
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    try {
      setIsSending(true);
      await emailjs.sendForm(
        "service_ajzh9ce",
        "template_xyvun5k",
        form.current,
        "sIXy50I3C07pm9WK8"
      );
      setIsSending(false);
      reset();
    } catch (err) {
      alert(
        "No se pudo enviar el email. Por favor, vuelve a intentarlo más tarde"
      );
      console.error(err);
    }
  };

  return (
    <div className="py-7 px-2 grid grid-cols-[20rem_1fr]">
      <form ref={form} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        {inputs.map((input, idx) => (
          <InputContainer
            key={idx}
            nameTag={input !== "mensaje" ? "input" : "textarea"}
            type={input !== "email" ? "text" : "email"}
            registerName={input}
            labelText={input}
            registerData={register(input, {
              required: {
                value: true,
                message: `${input} es requerido`,
              },
              pattern: {
                value:
                  input === "email"
                    ? /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
                    : "",
                message: "El email no es válido",
              },
            })}
            errors={errors}
          />
        ))}
        <button type="submit" className="py-1 px-2 my-0 mx-auto bg-primary text-white border-none rounded-md text-base hover:cursor-pointer active:scale-95">
          Enviar Email
        </button>
        <LoadSpin state={isSending ? "active" : "inactive"} />
      </form>
      <EmailPreview valores={watch()} />
    </div>
  );
};

export default EmailForm;
