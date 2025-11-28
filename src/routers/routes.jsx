import { Routes, Route } from "react-router-dom";
import Jugar from "../vistas/Jugar";
import SettingsMenu from "../components/SettingsMenu";
import Settings from "../components/Settings";
import ListaCartones from "../components/ListaCartones";
import SeleccionarCartones from "../vistas/SeleccionarCartones";
import UserCreate from "../vistas/UserCreate";
import UserEdit from "../vistas/UserEdit";
import UsersList from "../vistas/UsersList";
import Login from "../vistas/Login";

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        
      <Route path="/jugar" element={<Jugar />} />
      <Route path="/ListaCartones" element={<SeleccionarCartones />} />
      <Route path="/settings" element={<Settings />} />


       <Route path="/usuarios" element={<UsersList />} />

        <Route path="/usuarios/crear" element={<UserCreate />} />
        <Route path="/usuarios/editar/:id" element={<UserEdit />} />


       
      {/* Ruta 404 */}
      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  );
}
