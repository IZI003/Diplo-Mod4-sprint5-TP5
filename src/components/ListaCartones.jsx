import { UseCartones } from "../Context/CartonesContext";
import CartonItem from "./CartonItem";
import Pagination from "./Pagination";

export default function ListaCartones() {
  const { cartones, loading, pagination, getCartones } = UseCartones();

  if (loading) return <p>Cargando...</p>;

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {cartones.map(c => (
        <CartonItem key={c._id} carton={c} color={{ border: "border-gray-400" }} drawnNumbers={[]} />
      ))}
    </div>
 
    <Pagination
      page={pagination.page}
      totalPages={pagination.totalPages}
      onPageChange={(newPage) => getCartones(newPage, pagination.limit)}
    />
    </>
  );
}
    