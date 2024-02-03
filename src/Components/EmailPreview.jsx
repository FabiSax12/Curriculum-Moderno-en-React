const EmailPreview = ({ valores }) => {
  return (
    <div className="p-[.3125rem] max-w-sm min-h-[12.5rem] h-max inline border-[0.0625rem] border-dashed border-third text-xl leading-8 rounded-[.3125rem]">
      <h4 className="text-base font-bold">Nuevo mensaje de {valores.nombre}</h4>
      <h5 className="text-[.8rem] font-bold">
        to: Fabián Ricardo Vargas Araya {"<fabidev18@gmail.com>"}{" "}
      </h5>
      <h4 className="text-[.9rem]">{valores.asunto}</h4>
      <p className="text-[.7rem]">{valores.mensaje}</p>
      <h5 className="mt-5 border-t-[.125rem] border-dashed border-third text-[.6em]">Email enviado desde {valores.email}</h5>
    </div>
  );
};

export default EmailPreview;
