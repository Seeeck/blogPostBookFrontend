import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css"
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from './components/nav/Navbar.tsx';
import FormLogin from './components/Forms/FormLogin.tsx';
import FormRegister from './components/Forms/FormRegister.tsx';

createRoot(document.getElementById('root')!).render(

  <StrictMode>

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/login' element={<FormLogin />} />
        <Route path="/crearCuenta" element={<FormRegister />} />
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
