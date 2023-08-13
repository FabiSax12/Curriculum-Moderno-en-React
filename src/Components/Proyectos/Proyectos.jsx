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

const Proyectos = () => {
  const { pageContentRef } = useFirstActivation();

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
          <ProyectCard
            proyectName="Página de Popis"
            imageSrc={"/proyectos/Popis-React.PNG"}
            icons={[faHtml5, faCss3Alt, faJsSquare]}
            repo="https://github.com/FabiSax12/Popis-React"
            link="https://popis-react.vercel.app"
          />
          <ProyectCard
            proyectName="Portfolio"
            imageSrc="/proyectos/portfolio.PNG"
            icons={[faReact]}
            repo="https://github.com/FabiSax12/curriculum-moderno-en-react"
            link="https://curriculum-moderno-en-react.vercel.app"
          />
          <ProyectCard
            proyectName="Artamy"
            imageSrc="/proyectos/Artamy.PNG"
            icons={[faReact]}
          />
          <ProyectCard 
            proyectName="Conecta 4"
            imageSrc="/proyectos/Conecta-4.PNG"
            icons={[faReact]}
            repo="https://github.com/FabiSax12/conecta-4"
            link="https://conecta-4-two.vercel.app"
          />
          <div/>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
