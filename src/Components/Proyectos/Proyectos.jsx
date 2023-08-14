import "./Proyectos.css";
import { useFirstActivation } from "../../hooks/useFirstActivation";
import ProyectCard from "../ProyectCard/ProyectCard";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import proyectosData from "../../data/proyectos.json"
import { useState } from "react";

const Proyectos = () => {
  const { pageContentRef } = useFirstActivation();
  const [filterState, setFilterState ] = useState(null)

  const lenguajes = {
    html: faHtml5,
    css: faCss3Alt,
    js: faJsSquare,
    react: faReact,
    bootstrap: faBootstrap,
  }

  return (
    <div className={`page_proyectos active`} id="proyectos">
      <h2 className="title">Proyectos</h2>
      <div className="content" ref={pageContentRef}>
        <nav>
          <ul className="filtros_proyectos">
            <li>Todos</li>
            <li>Personales</li>
            <li>Para Clientes</li>
            <li>Mini Proyectos</li>
          </ul>
        </nav>
        <div className="proyects_container">
          {/* <ProyectCard
            proyectName="Portfolio"
            imageSrc="/proyectos/portfolio.PNG"
            icons={[faReact]}
            repo="https://github.com/FabiSax12/curriculum-moderno-en-react"
            link="https://curriculum-moderno-en-react.vercel.app"
          /> */}
          {
            proyectosData.filter(proyecto => {
              if (filterState !== null) {
                return proyecto.filtros.includes(filterState);
              }
              return true;
            }).map((proyecto, index) => (
              <ProyectCard
                key={index}
                proyectName={proyecto.titulo}
                imageSrc={proyecto.imagen}
                icons={proyecto.lenguajes.map(leng => lenguajes[leng])}
                repo={proyecto.repositorio}
                link={proyecto.host}
              />
            ))
          }
          <div/>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
