import Home from "./Home";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Proyects from "./Proyects";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <section className="pages">
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
