import Sidebar from "./Components/Sidebar";
import Pages from "./Components/Pages";
import Navigation from "./Components/Navigation";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <section className="principal">
        <Sidebar />
        <Pages />
      </section>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
