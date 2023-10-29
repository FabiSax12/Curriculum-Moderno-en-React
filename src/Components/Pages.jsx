import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import AboutMe from "../routes/AboutMe";
import Resume from "../routes/Resume";
import Proyects from "../routes/Proyects";
import Contact from "../routes/Contact";
import { FaSun, FaMoon } from "react-icons/fa"

const Pages = ({ menu, state }) => {
  const [isDark, setIsDark] = useState(true)

  const handleLightMode = () => {
    setIsDark(!isDark);
  }

  return (
    <section className="pages">
      <div className={`menu ${state ? "close" : ""}`} onClick={() => menu()}>
        <span className="menu__bar"></span>
        <span className="menu__bar"></span>
        <span className="menu__bar"></span>
      </div>
      <div className="light-dark_container">
        <div className={`light-mode_switcher ${isDark ? "dark" : "light"}`}>
          <FaSun onClick={handleLightMode} className="sun" />
          <FaMoon onClick={handleLightMode} className="moon" />
        </div>
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
