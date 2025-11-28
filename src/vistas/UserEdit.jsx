import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "./UserForm";
import { UseUsers } from "../Context/UserContext";

export default function UserEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, updateUser } = UseUsers();

  const existing = users.find(u => u._id === id);

  const [user, setUser] = useState(existing || {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(id, user);
    navigate("/usuarios");
  };

  useEffect(() => {
    if (existing) setUser(existing);
  }, [existing]);

  return <UserForm user={user} setUser={setUser} onSubmit={handleSubmit} />;
}
