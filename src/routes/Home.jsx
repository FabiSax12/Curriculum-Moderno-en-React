import React from "react";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="page_home">
      <div className="page_home_title">
        <h2>FABIÁN RICARDO VARGAS ARAYA</h2>
        <h4>Desarrollo Web Autodidacta</h4>
      </div>
      <section className="skills">
        <Skills animation={true} />
        <Skills animation={true} />
      </section>
    </div>
  );
};

export default Home;
