import React from "react";

export default function Pagination({ page, totalPages, onPageChange }) {
  // Genera array [1, 2, ..., totalPages]
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-between w-full mt-4 px-4">

      {/* Texto izquierda */}
      <div className="text-sm text-gray-700">
        Página <span className="font-semibold">{page}</span> de{" "}
        <span className="font-semibold">{totalPages}</span>
      </div>

      {/* Botones */}
      <div className="flex items-center space-x-1">

        {/* Botón Anterior */}
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 
                     disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          Anterior
        </button>

        {/* Lista de páginas */}
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`px-3 py-1 rounded transition
              ${
                p === page
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {p}
          </button>
        ))}

        {/* Botón Siguiente */}
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 
                     disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
