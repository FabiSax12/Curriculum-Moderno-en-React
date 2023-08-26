import Sidebar from "./Components/Sidebar";
import Pages from "./Components/Pages";
import Navigation from "./Components/Navigation";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import Resume from "./Components/Resume";
import Proyects from "./Components/Proyects";
import Contact from "./Components/Contact";

function App() {
  return (
    <HashRouter>
      <section className="principal">
        <Sidebar />
        {/* <Pages /> */}
        <section className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/curriculum" element={<Resume />} />
            <Route path="/proyects" element={<Proyects />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<Home />} />
          </Routes>
        </section>
      </section>
      <Navigation />
    </HashRouter>
  );
}

export default App;
