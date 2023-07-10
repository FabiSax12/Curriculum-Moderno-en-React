import { useState } from 'react';
import './App.css'
import Sidebar from "./Components/Sidebar/Sidebar"
import Paginas from "./Components/Páginas/Páginas"
import Navegacion from "./Components/Nav/Navegacion"

function App() {
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
  )
}

export default App
