import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import { CartonesProvider } from './Context/CartonesContext.jsx'
import { UserProvider } from './Context/UserContext.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <ThemeProvider>
    <CartonesProvider>
      <UserProvider>
          <App />
      </UserProvider>
    </CartonesProvider>
    </ThemeProvider>
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
