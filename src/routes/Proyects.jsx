import { useState } from "react";
import { useFirstActivation } from "../hooks/useFirstActivation";
import ProyectCard from "../components/ProyectCard";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faBootstrap,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import proyectosData from "../data/proyectos.json";

const Proyects = () => {
  const { pageContentRef } = useFirstActivation();
  const [filterState, setFilterState] = useState("todos");

  const lenguajes = {
    html: faHtml5,
    css: faCss3Alt,
    js: faJsSquare,
    react: faReact,
    bootstrap: faBootstrap,
    sass: faSass,
  };

  const handleClick = (e) => {
    // e.currentTarget.classList.add("transform-[scale(1.1)]", "text-primary");
    const filtro = e.currentTarget.getAttribute("data-value");
    setFilterState(filtro);
  };

  return (
    <div className="w-full h-max animate-page-intro" id="proyectos">
      <h2 className="title">Proyectos</h2>
      <div className="content" ref={pageContentRef}>
        <nav>
          <ul className="mt-5 pt-0 px-0 pb-1 flex flex-row justify-around border-b-[0.125rem] border-solid border-third">
            <li
              onClick={handleClick}
              data-value="todos"
              className={`list-none cursor-pointer transition-[all_.3s_ease] ${filterState === "todos" ? "scale-110 text-primary" : ""}`}
            >
              Todos
            </li>
            <li
              onClick={handleClick}
              data-value="personal"
              className={`list-none cursor-pointer transition-[all_.3s_ease] ${filterState === "personal" ? "scale-110 text-primary" : ""}`}
            >
              Personales
            </li>
            <li
              onClick={handleClick}
              data-value="cliente"
              className={`list-none cursor-pointer transition-[all_.3s_ease] ${filterState === "cliente" ? "scale-110 text-primary" : ""}`}
            >
              Clientes
            </li>
            <li
              onClick={handleClick}
              data-value="mini"
              className={`list-none cursor-pointer transition-[all_.3s_ease] ${filterState === "mini" ? "scale-110 text-primary" : ""}`}
            >
              Mini Proyectos
            </li>
          </ul>
        </nav>
        <div className="my-5 m-auto max-w-[95%] grid gap-5 grid-cols-[repeat(auto-fill, minmax(15rem, 1fr)] justify-items-center">
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

export default Proyects;
