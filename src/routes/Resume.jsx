import Job from "../components/Job";
import { useFirstActivation } from "../hooks/useFirstActivation";
import { Academic } from "../components/Academic";

const Resume = () => {
  const { pageContentRef } = useFirstActivation();

  return (
    <div className="animate-page-intro" id="resume">
      <h2 className="title">Currículum</h2>
      <div className="content" ref={pageContentRef}>
        <section className="mt-5 mx-0 mb-0">
          <h3 className="subtitle text-center">Experiencia Laboral</h3>
          <Job
            lugar="Almacen AMP"
            inicio="03 - 11 - 2022"
            final="15 - 12 - 2022"
            puesto="Asistente de Bodega (Pasantía)"
            descripcion="Tener un alto conocimiento acerca de
            materiales eléctricos, herramientas e inventarios. Alistar, empacar y
            despachar pedidos de los clientes."
          />
        </section>
        <section className="mt-14">
          <h3 className="subtitle">Formación Académica</h3>
          <Academic
            lugar="CTP Nataniel Arias Murillo"
            fecha="13 dic 2023"
            titulo="Técnico Medio en Electrotécnia"
            area="Electricidad / Electrónica"
          />
          <Academic
            lugar="CTP Nataniel Arias Murillo"
            fecha="13 dic 2023"
            titulo="Bachillerato"
            area="Secundaria"
          />
          <Academic
            lugar="Escuela Los Chiles de AZ"
            fecha="12 dic 2017"
            titulo="Diploma"
            area="Primaria"
          />
        </section>
      </div>
    </div>
  );
};

export default Resume;
