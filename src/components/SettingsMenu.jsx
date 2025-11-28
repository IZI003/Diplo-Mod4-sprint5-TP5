import { useState } from "react";
import { UseCartones } from "../Context/CartonesContext";

export default function SettingsMenu({ isOpen, onClose }) {

  const { cartones, agregarCarton, eliminarCarton, actualizarCarton } = UseCartones();
  const [nuevo, setNuevo] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl p-6 w-full max-w-md shadow-lg">

        <h2 className="text-2xl font-bold mb-4 text-center">Configurar Cartones</h2>

        {/* Agregar */}
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            placeholder="Nº de cartón"
            value={nuevo}
            onChange={(e) => setNuevo(e.target.value)}
            className="flex-1 p-2 rounded-md bg-gray-100 dark:bg-gray-800"
          />
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
            onClick={() => {
              if (nuevo.trim() !== "") {
                agregarCarton(nuevo);
                setNuevo("");
              }
            }}
          >
            Añadir
          </button>
        </div>

        {/* Lista */}
        <div className="space-y-3 max-h-60 overflow-y-auto">
          {cartones.length === 0 && (
            <p className="text-gray-500 text-center">No hay cartones aún</p>
          )}

          {cartones.map((c) => (
            <div
              key={c.id}
              className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-3 rounded-lg"
            >
              <input
                type="number"
                defaultValue={c.numero}
                onBlur={(e) => actualizarCarton(c.id, e.target.value)}
                className="p-2 w-24 rounded-md bg-white dark:bg-gray-700"
              />

              <button
                onClick={() => eliminarCarton(c.id)}
                className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        {/* Cerrar */}
        <button
          onClick={onClose}
          className="w-full mt-5 py-2 bg-indigo-600 text-white rounded-lg"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
