import {React, useState, useEffect} from "react"
import "./Experiencia.css"
import Trabajos from "../Trabajos/Trabajos";

const Experiencia = ({ state }) => {
  const [isFirstActivation, setIsFirstActivation] = useState(true);

  useEffect(() => {
    if (state === "inactive") {
      setIsFirstActivation(true);
    }
  }, [state]);

  if (state == "active" && isFirstActivation) {
    const xpContent = document.querySelector(".page_xp-content");
    xpContent.classList.remove("show");
    setTimeout(() => xpContent.classList.add("show"), 400);
    setIsFirstActivation(false);
  }

  return (
    <div className={`page_xp ${state}`}>
      <h2 className="title">Experiencia Laboral</h2>
      <div className="page_xp-content">
        <Trabajos 
          lugar="Almacen AMP"
          inicio="03 - 11 - 2022"
          final="15 - 12 - 2022"
          puesto="Asistente de Bodega"
          descripcion="Tener un alto conocimiento acerca de
          materiales eléctricos, herramientas e inventarios. Alistar, empacar y
          despachar pedidos de los clientes."
        />
        <Trabajos 
          lugar="Electro Beyco"
          inicio="02 - 10 - 2023"
          final="01 - 12 - 2023"
          puesto="Asistente de Bodega"
          descripcion="Tener un alto conocimiento acerca de
          materiales eléctricos, herramientas e inventarios. Alistar, empacar y
          despachar pedidos de los clientes."
        />
        <Trabajos 
          lugar="Lorem Ipsum"
          inicio="01 - 01 - 2024"
          final="31 - 12 - 2024"
          puesto="Dolor sit amet"
          descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Numquam dolore, tempora eos esse harum magni quos voluptatum labore ab iste molestiae, 
            sit totam dolorum? In laboriosam deserunt corrupti saepe optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Numquam dolore, tempora eos esse harum magni quos voluptatum labore ab iste molestiae, 
            sit totam dolorum? In laboriosam deserunt corrupti saepe optio."
        />
        <Trabajos 
          lugar="Lorem Ipsum"
          inicio="01 - 01 - 2024"
          final="31 - 12 - 2024"
          puesto="Dolor sit amet"
          descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Numquam dolore, tempora eos esse harum magni quos voluptatum labore ab iste molestiae, 
            sit totam dolorum? In laboriosam deserunt corrupti saepe optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Numquam dolore, tempora eos esse harum magni quos voluptatum labore ab iste molestiae, 
            sit totam dolorum? In laboriosam deserunt corrupti saepe optio."
        />
        <Trabajos 
          lugar="Lorem Ipsum"
          inicio="01 - 01 - 2024"
          final="31 - 12 - 2024"
          puesto="Dolor sit amet"
          descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Numquam dolore, tempora eos esse harum magni quos voluptatum labore ab iste molestiae, 
            sit totam dolorum? In laboriosam deserunt corrupti saepe optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Numquam dolore, tempora eos esse harum magni quos voluptatum labore ab iste molestiae, 
            sit totam dolorum? In laboriosam deserunt corrupti saepe optio."
        />
      </div>
      
    </div>
  )
}

export default Experiencia