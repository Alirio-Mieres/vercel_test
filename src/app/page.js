"use client";

import { useState } from "react";

export default function Home() {
  // const cursos = ["Programacion", "Inglés", "Aire Acondicionado", "Java"];
  const cursos = [
    "Programación Full Stack",
    "Inglés para Call Center",
    "Aire Acondicionado",
    "Java",
    "Mecánica de motos",
    "Asesor Comercial",
    "Conectividad y Redes",
    "Asesor Financiero",
    "Auxiliar de Almacén y Logística",
    "Mecánica de Motos",
    "Marketing Digital",
    "Visitador Médico",
    "Farmacología",
    "Asistente Administrativo",
    "Mantenimiento y reparación de celulares, tablets y computadoras",
    "Mantenimiento y reparación de aires acondicionados y electricidad básica",
  ];
  //Estado que me ayudara a mostrar los cursos filtrados
  const [search, setSearch] = useState(cursos);

  // Funcion que maneja el cambio en el input
  const handleSearch = (event) => {
    //Guardo el texto del input
    let text = event.target.value;
    const filtered = [];

    //Itero el arreglo con todos los cursos y los filtros
    cursos.forEach((element) => {
      //Convierto a minusculas los strings de los cursos y corroboro si
      //incluye el texto del input
      if (element.toLowerCase().includes(text)) {
        //Guardo el elemento que coincida con la búsqueda
        filtered.push(element);
      }
    });

    //Cambio el estado para mostrar los cusos filtrados
    // if (text === "") {
    //   setSearch([]);
    //   return;
    // }

    // cambio el estado para mostrar los cursos filtrados
    setSearch(filtered);
  };

  return (
    <main>
      <input type="text" onKeyUp={handleSearch} />
      <ul>
        {search.map((element, i) => (
          // <div key={i}>

          <li key={i}>{element}</li>
          // </div>
        ))}
      </ul>
    </main>
  );
}
