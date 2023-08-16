import Home from "./Home";
import SobreMi from "./SobreMi";
import Curriculum from "./Curriculum";
import Proyectos from "./Proyectos";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

const Páginas = () => {
  return (
    <div className="pages">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<SobreMi />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/proyects" element={<Proyectos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Páginas;
