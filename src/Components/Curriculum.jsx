import Trabajos from "./Trabajos";
import { useFirstActivation } from "../hooks/useFirstActivation";

const Formación = () => {
  const { pageContentRef } = useFirstActivation();

  return (
    <div className={`page_formación active`} id="formación">
      <h2 className="title">Currículum</h2>
      <div className="content" ref={pageContentRef}>
        <section className="experiencia_laboral">
          <h3 className="subtitle">Experiencia Laboral</h3>
          <Trabajos
            lugar="Almacen AMP"
            inicio="03 - 11 - 2022"
            final="15 - 12 - 2022"
            puesto="Asistente de Bodega"
            descripcion="Tener un alto conocimiento acerca de
            materiales eléctricos, herramientas e inventarios. Alistar, empacar y
            despachar pedidos de los clientes."
          />
          <Trabajos
            lugar="Electro Beyco"
            inicio="02 - 10 - 2023"
            final="01 - 12 - 2023"
            puesto="Técnico en Paneles de Control Industrial"
            descripcion="Implementar los distintos componentes para control industrial con PLC y contactores."
          />
        </section>
        <section className="formacion_academica">
          <h3 className="subtitle">Formación Académica</h3>
          <Trabajos
            lugar="CTP Nataniel Arias Murillo"
            inicio="13 dic 2023"
            final=""
            puesto="Bachillerato y Técnico Medio en Electrotécnia"
            descripcion=""
          />
          <Trabajos
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

export default Formación;
