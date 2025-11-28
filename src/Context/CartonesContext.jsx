import { createContext, useCallback, useContext, useEffect, useState } from "react";
import api from "./api";
import Swal from "sweetalert2";

const CartonesContext = createContext();

export function CartonesProvider({ children }) {
  const [cartones, setCartones] = useState([]);
  const [pagination, setPagination] = useState({
  page: 1,
  totalPages: 1,
  total: 0,
  limit: 9
});
  const [loading, setLoading] = useState(false);
 
const [seleccionados, setSeleccionados] = useState(() => {
  const saved = localStorage.getItem("seleccionados");
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem("seleccionados", JSON.stringify(seleccionados));
}, [seleccionados]);

  // Supongamos que obtienes el usuario del localStorage o context global
  const userId = localStorage.getItem("userId") || null;
    const toggleSeleccion = (carton) => {

    setSeleccionados((prev) => {
        const existe = prev.find((c) => c._id === carton._id);
        if (existe) {
        // Remover si ya estaba
        return prev.filter((c) => c._id !== carton._id);
        } else {
        // Agregar
        return [...prev, carton];
        }
    });
    };

// Guardar seleccionados en backend
const guardarSeleccion = async () => {
  try {
    await api.post("/bingo/seleccion", {
      userId,
      cartones: seleccionados.map(c => c._id)
    });

    Swal.fire("Guardado", "Los cartones fueron asignados correctamente", "success");

    // borramos la cache local
    localStorage.removeItem("seleccionados");

  } catch (err) {
    Swal.fire("Error", "No se pudo guardar la selección", err);
  }
};

const getSeleccion = useCallback(async () => {
  try {
    const saved = localStorage.getItem("seleccion");
    if (saved) {
      setSeleccionados(JSON.parse(saved));
      return;
    }
    if(userId){
    const { data } = await api.get(`/bingo/seleccion/${userId}`);
    setSeleccionados(data.cartones || []);
    }

  } catch (e) {
    console.error("Error cargando selección previa:", e);
  }
}, [userId]); 

  // Obtener lista con paginación
  const getCartones = async (page = 1, limit = 20) => {
    setLoading(true);
    try {
      const { data } = await api.get(`/bingo/generar?page=${page}&limit=${limit}`);
      setCartones(data.items);  // 👈 ahora sí guardas solo los cartones
        setPagination({
        page: data.page,
        limit: data.limit,
        total: data.total,
        totalPages: data.totalPages
        });
    } catch (e) {
      console.error("Error obteniendo cartones:", e);
    } finally {
      setLoading(false);
    }
  };
// 🔹 Se ejecuta solo 1 vez al montar
  useEffect(() => {
    getCartones();
  }, []);

 useEffect(() => {
  if (cartones.length > 0) {
    getSeleccion();
  }
}, [cartones, getSeleccion]);
 // Obtener un carton
  const getCarton = async (id) => {
    try {
      const { data } = await api.get(`/bingo/carton/${id}/json`);
      return data;
    } catch (e) {
      console.error("Error obteniendo carton:", e);
    }
  };

  // Crear grupo de cartones
  const crearGrupo = async (cant) => {
    try {
      await api.get(`/bingo/generar?cant=${cant}`);
      Swal.fire("Éxito", `${cant} cartones creados`, "success");
      getCartones(); // refresca
    } catch (e) {
      Swal.fire("Error", `No se pudo crear el grupo  ${e}`, "error");
    }
  };

  // Eliminar un carton con confirmación
  const eliminarCarton = async (id) => {
    const result = await Swal.fire({
      title: "¿Eliminar cartón?",
      text: `Se eliminará el cartón ${id}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
    });

    if (!result.isConfirmed) return;

    try {
      await api.delete(`/bingo/carton/${id}`);
      Swal.fire("Eliminado", "El cartón fue eliminado", "success");
      getCartones(); // refresca lista
    } catch (e) {
      Swal.fire("Error", `No se pudo eliminar el cartón ${e}`, "error");
    }
  };

  return (
    <CartonesContext.Provider
      value={{
        cartones,
        loading,
        getCartones,
        getCarton,
        crearGrupo,
        eliminarCarton,

        seleccionados,
        toggleSeleccion,
        guardarSeleccion,
        getSeleccion,
        pagination, setPagination
      }}
    >
      {children}
    </CartonesContext.Provider>
  );
}

export const UseCartones = () => useContext(CartonesContext);