import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";
import React from "react";

const Aside = () => {
  return (
    <aside className="w-[422px] h-full bg-[#d1d1d1] px-20 py-14 flex flex-col gap-8">
      <h2 className="text-xl font-semibold">Categorías</h2>
      <ol className="flex flex-col gap-2">
        <li>Ropa</li>
        <li>Electrónica</li>
        <li>Hogar</li>
        <li>Belleza</li>
        <li>Juguetes</li>
        <li>Deportes</li>
        <li>Salud</li>
        <li>Alimentos</li>
        <li>Mascotas</li>
        <li>Libros</li>
        <li>Muebles</li>
        <li>Automotriz</li>
        <li>Herramientas</li>
        <li>Joyeria</li>
        <li>Arte</li>
        <li>Bebés</li>
        <li>Software</li>
        <li>Equipaje</li>
        <li>Decoración</li>
        <li>Papelería</li>
      </ol>
      <h2 className="text-xl font-semibold">Rango de precio</h2>
      <h2 className="text-xl font-semibold">Puntuación</h2>

      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          1
          <StarFilledIcon />
        </div>
        <div className="flex items-center">
          2 <StarFilledIcon /> <StarFilledIcon />
        </div>
        <div className="flex items-center">
          3 <StarFilledIcon /> <StarFilledIcon /> <StarFilledIcon />
        </div>
        <div className="flex items-center">
          4 <StarFilledIcon /> <StarFilledIcon /> <StarFilledIcon />{" "}
          <StarFilledIcon />
        </div>
        <div className="flex items-center">
          5 <StarFilledIcon /> <StarFilledIcon /> <StarFilledIcon />{" "}
          <StarFilledIcon /> <StarFilledIcon />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
