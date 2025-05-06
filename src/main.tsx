import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css"
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import NavBar from './components/Nav/Navbar.tsx';
import FormLogin from './components/Forms/FormLogin.tsx';
import FormRegister from './components/Forms/FormRegister.tsx';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import {ToastContainer} from "react-toastify"
const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/login' element={<FormLogin />} />
          <Route path="/crearCuenta" element={<FormRegister />} />
        </Routes>

      </BrowserRouter>
      <ToastContainer />
    </StrictMode>
  </QueryClientProvider>,
)
