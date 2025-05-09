import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router"
import NavBar from "./components/Nav/Navbar"
import App from "./App";
import FormLogin from "./components/Forms/FormLogin";
import FormRegister from "./components/Forms/FormRegister";
import EmailConfirmationAlert from "./components/Authentication/EmailConfirmationAlert";
import ResourceNotFound from "./components/Common/ResourceNotFound";
import { useAuthenticationStore } from "./stores/userAuthenticationStore";


import { } from "react-router"

const Router = () => {
    const isLogged = useAuthenticationStore(state => state.isLogged)
    console.log("LOGEADO?::",isLogged)
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>

                <Route index path="/" element={isLogged ? <App /> : <Navigate to={"/login"} />} />
                <Route path='/login' element={<FormLogin />} />
                <Route path="/crearCuenta" element={<FormRegister />} />
                <Route path="/alertaConfirmacionCorreo" element={<EmailConfirmationAlert />} />
                <Route path="/recursoNoEncontrado" element={<ResourceNotFound />} />

            </Routes>

        </BrowserRouter>
    )
}

export default Router;