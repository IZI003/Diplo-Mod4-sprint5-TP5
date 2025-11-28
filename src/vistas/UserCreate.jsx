import { useState } from "react";
import UserForm from "./UserForm";
import { useNavigate } from "react-router-dom";
import { UseUsers } from "../Context/UserContext";

export default function UserCreate() {
  const navigate = useNavigate();
  const { createUser } = UseUsers();

  const [user, setUser] = useState({
    nombre: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(user);
    navigate("/usuarios");
  };

  return <UserForm user={user} setUser={setUser} onSubmit={handleSubmit} />;
}
