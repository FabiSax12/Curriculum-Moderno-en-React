import "./FormularioEmail.css";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import LoadSpin from "../Load-Spin/LoadSpin";
import InputContainer from "../InputContainer/InputContainer";
import PrevisualizaciónCorreo from "../Prev-Correo/PrevisualizaciónCorreo";

const FormularioEmail = () => {
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
    <div className="form_grid">
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit" className="form_button">
          Enviar Email
        </button>
        <LoadSpin state={isSending ? "active" : "inactive"} />
      </form>
      <PrevisualizaciónCorreo valores={watch()} />
    </div>
  );
};

export default FormularioEmail;
