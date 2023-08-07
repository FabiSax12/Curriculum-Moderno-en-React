import "./Pages.css";
import Home from "../Inicio/Home";
import SobreMi from "../Sobre Mi/SobreMi";
import Curriculum from "../Curriculum/Curriculum";
import Proyectos from "../Proyectos/Proyectos";
import Contact from "../Contact/Contact";

const Páginas = ({ pageState }) => {
  return (
    <div className="pages">
      <Home state={pageState.home} />
      <SobreMi state={pageState.user} />
      <Curriculum state={pageState.curriculum} />
      <Proyectos state={pageState.proyectos} />
      <Contact state={pageState.contact} />
    </div>
  );
};

export default Páginas;
