//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { ToastContainer } from 'react-toastify';
import './App.css'
import AppRoutes from './routers/routes';

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>

     <ToastContainer position="top-right" autoClose={3000} />
     <AppRoutes />
    </>
      
  )
}

export default App
