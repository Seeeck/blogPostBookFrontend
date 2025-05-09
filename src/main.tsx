import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css"
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import FormLogin from './components/Forms/FormLogin.tsx';
import FormRegister from './components/Forms/FormRegister.tsx';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { ToastContainer } from "react-toastify"
import EmailConfirmationAlert from './components/Authentication/EmailConfirmationAlert.tsx';
import ResourceNotFound from './components/Common/ResourceNotFound.tsx';
import NavBar from './components/Nav/Navbar.tsx';
import Router from './Router.tsx';
const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>

      <Router/>
      <ToastContainer />
    </StrictMode>
  </QueryClientProvider>,
)
