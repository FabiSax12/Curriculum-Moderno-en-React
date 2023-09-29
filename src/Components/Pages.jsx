import Home from "../routes/Home";
import AboutMe from "../routes/AboutMe";
import Resume from "../routes/Resume";
import Proyects from "../routes/Proyects";
import Contact from "../routes/Contact";
import { Routes, Route } from "react-router-dom";

const Pages = ({ menu, state }) => {
  return (
    <section className="pages">
      <div className={`menu ${state ? "close" : ""}`} onClick={() => menu()}>
        <span className="menu__bar"></span>
        <span className="menu__bar"></span>
        <span className="menu__bar"></span>
      </div>
      <Routes>
        <Route element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/curriculum" element={<Resume />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </section>
  );
};

export default Pages;
