import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Paginas from "./Components/Páginas/Páginas";
import Navegacion from "./Components/Nav/Navegacion";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="principal">
        <Sidebar />
        <Paginas />
      </div>
      <Navegacion />
    </BrowserRouter>
  );
}

export default App;
