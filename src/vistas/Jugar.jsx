import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { PacmanLoader } from "react-spinners";
import Bolillero from "../components/Bolillero";
import Cartones from "../components/Cartones";
import { UseThemeContext } from "../Context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { UseCartones } from "../Context/CartonesContext";

const Jugar = () => {
  const { darkMode } = UseThemeContext();
  const [loading, setLoading] = useState(true);
    const { seleccionados } = UseCartones();

    useEffect(() => {
    // Simula un tiempo mínimo de carga (por ejemplo, 1 segundo)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className="flex items-center justify-center h-screen"
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <PacmanLoader 
        color="#36d7b7" 
        size={20}
         />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
          <div className='bg-background-light dark:bg-background-dark font-display min-h-screen'>
                <Header />
                <div className="p-2"> 
                    <Bolillero drawnNumbers={[5,21,38,52,71,12,18,44,59,89,63,3,28,48,68,9,24,33,55,75,14,16,41,60,61]} />
                    <Cartones cartones = {seleccionados}  drawnNumbers={[5,21,38,52,71,12,18,44,59,89,63,3,28,48,68,9,24,33,55,75,14,16,41,60,61]}></Cartones>
                </div>
            </div>
      <Footer />
    </div>
  );
};

export default Jugar;