import { React, useState } from "react";
import "./Principal.css"
import Sidebar from "../Sidebar/Sidebar";
import Paginas from "../Páginas/Páginas";
import Navegacion from "../Nav/Navegacion";

const Principal = () => {
  const [pageState, setPageState] = useState({
    home: "active",
    user: "inactive",
    curriculum: "inactive",
    xp: "inactive"
  });

  const toggleState = (pageId) => {
    setPageState((prevPageState) => {
      const newPageState = {};

      Object.keys(prevPageState).forEach((key) => {
        newPageState[key] = key === pageId ? "active" : "inactive";
      });

      return newPageState;
    });
  };

  return (
    <>
      <div className="principal">
        <Sidebar />
        <Paginas pageState={pageState} />
      </div>
      <Navegacion click={toggleState} />
    </>
  );
};

export default Principal