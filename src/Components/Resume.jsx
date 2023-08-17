import Job from "./Job";
import { useFirstActivation } from "../hooks/useFirstActivation";

const Resume = () => {
  const { pageContentRef } = useFirstActivation();

  return (
    <div className="page_formación" id="formación">
      <h2 className="title">Currículum</h2>
      <div className="content" ref={pageContentRef}>
        <section className="experiencia_laboral">
          <h3 className="subtitle">Experiencia Laboral</h3>
          <Job
            lugar="Almacen AMP"
            inicio="03 - 11 - 2022"
            final="15 - 12 - 2022"
            puesto="Asistente de Bodega"
            descripcion="Tener un alto conocimiento acerca de
            materiales eléctricos, herramientas e inventarios. Alistar, empacar y
            despachar pedidos de los clientes."
          />
          <Job
            lugar="Electro Beyco"
            inicio="02 - 10 - 2023"
            final="01 - 12 - 2023"
            puesto="Técnico en Paneles de Control Industrial"
            descripcion="Implementar los distintos componentes para control industrial con PLC y contactores."
          />
        </section>
        <section className="formacion_academica">
          <h3 className="subtitle">Formación Académica</h3>
          <Job
            lugar="CTP Nataniel Arias Murillo"
            inicio="13 dic 2023"
            final=""
            puesto="Bachillerato y Técnico Medio en Electrotécnia"
            descripcion=""
          />
          <Job
            lugar="Escuela Los Chiles de AZ"
            inicio="12 dic 2017"
            final=""
            puesto="Diploma"
            descripcion=""
          />
        </section>
      </div>
    </div>
  );
};

export default Resume;
