import Home from "./Home";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Proyects from "./Proyects";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Pages = ({ menu, state }) => {
  return (
    <section className="pages">
      <div className={`menu ${state ? "close" : ""}`} onClick={() => menu()}>
        {/* <FontAwesomeIcon icon={faBars} /> */}
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
