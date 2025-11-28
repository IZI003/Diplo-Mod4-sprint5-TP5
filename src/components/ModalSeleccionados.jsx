import { UseCartones } from "../Context/CartonesContext";

export default function ModalSeleccionados({ open, setOpen, userId }) {
  const { seleccionados, guardarSeleccion } = UseCartones();

  if (!open) return null;

  const haySeleccionados = seleccionados.length > 0;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-96 border dark:border-gray-700">

        {/* Título */}
        <h2 className="text-xl font-bold text-center dark:text-white">
          Cartones Seleccionados
        </h2>

        {/* Lista */}
        <div className="mt-4 space-y-2 max-h-64 overflow-y-auto">
          {!haySeleccionados ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              Ningún cartón seleccionado
            </p>
          ) : (
            seleccionados.map((c) => (
              <div
                key={c._id}
                className="p-2 border rounded dark:border-gray-700 dark:text-white"
              >
                {c.codigo || `Cartón ${c._id}`}
              </div>
            ))
          )}
        </div>

        {/* Botones */}
        <div className="mt-6 flex justify-between items-center">

          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 dark:text-white rounded transition hover:bg-gray-400 dark:hover:bg-gray-600"
          >
            Cerrar
          </button>

          {/* 👉 Solo se muestra si hay seleccionados */}
          {haySeleccionados && (
            <button
              onClick={() => guardarSeleccion(userId)}
              className="px-4 py-2 bg-green-600 text-white rounded transition hover:bg-green-700"
            >
              Guardar
            </button>
          )}

        </div>

      </div>
    </div>
  );
}
