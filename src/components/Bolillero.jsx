import React from 'react'

export default function Bolillero({ drawnNumbers = [] }) {
  const buckets = Array.from({ length: 9 }, () => [])

  drawnNumbers.forEach((n) => {
    if (typeof n !== 'number' || n <= 0) return
    const idx = Math.min(Math.floor(n / 10), 8)
    buckets[idx].push(n)
  })

  // Sort each bucket
  buckets.forEach((b) => b.sort((a, b2) => a - b2))

  const headers = ['1-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89']
// Encontrar la columna más alta
  const maxRows = Math.max(...buckets.map((b) => b.length));
    return (
    <div className="p-4">
      <h1 className="font-bold mb-3 text-lg text-primary">Bolillero</h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 sm:p-4 overflow-x-auto">
        {/* grid principal: 9 columnas */}
        <div className="grid grid-cols-9 gap-2 sm:gap-3 md:gap-4 text-center">
          {/* headers */}
          {headers.map((h, i) => (
            <div key={`header-${i}`} className="font-bold text-primary text-xs sm:text-sm md:text-base">
              {h}
            </div>
          ))}

          {/* filas de números (alineadas bajo los headers) */}
          {Array.from({ length: maxRows }).map((_, rowIndex) =>
            buckets.map((col, colIndex) => {
              const num = col[rowIndex];
              return num ? (
                <div
                  key={`num-${colIndex}-${num}`}
                  className={`
                    flex items-center justify-center rounded-full font-semibold mx-auto
                    bg-gray-100 dark:bg-gray-700
                    text-green-700 border-2 border-green-700
                    w-7 h-7 text-xs
                    sm:w-8 sm:h-8 sm:text-sm
                    md:w-10 md:h-10 md:text-base
                    lg:w-12 lg:h-12
                  `}
                >
                  {num}
                </div>
              ) : (
                // celda vacía mantiene alineación
                <div key={`empty-${colIndex}-${rowIndex}`} className="invisible">
                  0
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
