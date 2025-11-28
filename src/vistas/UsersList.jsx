import { Link } from "react-router-dom";
import { UseUsers } from "../Context/UserContext";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function UsersList() {
  const { users, deleteUser, loading } = UseUsers();

  return (
    <>
     <Header />
    
    <div className="p-6">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Usuarios</h1>
        <Link
          to="/usuarios/crear"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Crear Usuario
        </Link>
      </div>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="space-y-3">
          {users.map((u) => (
            <div
              key={u._id}
              className="p-4 bg-white shadow rounded flex justify-between"
            >
              <div>
                <p className="font-bold">{u.nombre}</p>
                <p>{u.email}</p>
              </div>

              <div className="flex gap-3">
                <Link
                  to={`/usuarios/editar/${u._id}`}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Editar
                </Link>

                <button
                  onClick={() => deleteUser(u._id)}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}
