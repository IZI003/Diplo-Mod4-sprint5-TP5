import { useState } from "react";
import { UseCartones } from "../Context/CartonesContext";
import Footer from "./Footer";
import Header from "./Header";

export default function Settings() {
  const { crearGrupo } = UseCartones();
  const [cantidad, setCantidad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    crearGrupo(Number(cantidad));
  };

  return (
    <>
     <Header />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Administrar Cartones</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          placeholder="Cantidad de cartones"
          className="border p-2 w-full"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Crear grupo
        </button>
      </form>
    </div>
    <Footer />
    </>
  );
}
