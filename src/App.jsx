import Sidebar from "./Components/Sidebar";
import Paginas from "./Components/Páginas";
import Navegacion from "./Components/Navegacion";
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
