import { useState } from "react";
import { useFirstActivation } from "../../hooks/useFirstActivation";
import ProyectCard from "../ProyectCard/ProyectCard";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import proyectosData from "../../data/proyectos.json";

const Proyectos = () => {
  const { pageContentRef } = useFirstActivation();
  const [filterState, setFilterState] = useState("todos");

  const lenguajes = {
    html: faHtml5,
    css: faCss3Alt,
    js: faJsSquare,
    react: faReact,
    bootstrap: faBootstrap,
  };

  const handleClick = (e) => {
    e.currentTarget.classList.add("selected");
    const filtro = e.currentTarget.getAttribute("data-value");
    setFilterState(filtro);
  };

  return (
    <div className={`page_proyectos active`} id="proyectos">
      <h2 className="title">Proyectos</h2>
      <div className="content" ref={pageContentRef}>
        <nav>
          <ul className="filtros_proyectos">
            <li
              onClick={handleClick}
              data-value="todos"
              className={filterState === "todos" ? "selected" : ""}
            >
              Todos
            </li>
            <li
              onClick={handleClick}
              data-value="personal"
              className={filterState === "personal" ? "selected" : ""}
            >
              Personales
            </li>
            <li
              onClick={handleClick}
              data-value="cliente"
              className={filterState === "cliente" ? "selected" : ""}
            >
              Para Clientes
            </li>
            <li
              onClick={handleClick}
              data-value="mini"
              className={filterState === "mini" ? "selected" : ""}
            >
              Mini Proyectos
            </li>
          </ul>
        </nav>
        <div className="proyects_container">
          {proyectosData
            .filter((proyecto) => {
              if (filterState !== "todos") {
                return proyecto.filtros.includes(filterState);
              }
              return true;
            })
            .map((proyecto, index) => (
              <ProyectCard
                key={index}
                proyectName={proyecto.titulo}
                imageSrc={proyecto.imagen}
                icons={proyecto.lenguajes.map((leng) => lenguajes[leng])}
                repo={proyecto.repositorio}
                link={proyecto.host}
              />
            ))}
          <div />
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
