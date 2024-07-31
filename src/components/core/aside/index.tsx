"use client"
import { useBearStore } from "@/context/store";
import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";
import React from "react";

const Aside = () => {
  const bears = useBearStore((state) => state.bears);
  const addBears = useBearStore((state) => state.increaseBears);

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
        <div className="flex items-center gap-2">
          <p>1</p>
          <StarFilledIcon className="text-principal" />
        </div>
        <div className="flex items-center gap-2">
          <p>2</p>
          <div className="flex gap-1">
            <StarFilledIcon className="text-principal" />
            <StarFilledIcon className="text-principal" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>3</p>
          <div className="flex gap-1">
            <StarFilledIcon className="text-principal" />
            <StarFilledIcon className="text-principal" />
            <StarFilledIcon className="text-principal" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>4</p>
          <div className="flex gap-1">
            <StarFilledIcon className="text-principal" />
            <StarFilledIcon className="text-principal" />
            <StarFilledIcon className="text-principal" />
            <StarFilledIcon className="text-principal" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>5</p>
          <div className="flex gap-1">
            <StarFilledIcon className="text-principal" />
            <StarFilledIcon className="text-principal" />
            <StarFilledIcon className="text-principal" />
            <StarFilledIcon className="text-principal" />
            <StarFilledIcon className="text-principal" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
