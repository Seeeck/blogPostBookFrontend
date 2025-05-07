


import { Box } from '@mui/material'
import FormLogin from './components/Forms/FormLogin'


import NavBar from './components/Nav/Navbar'
import { useEffect, useState } from 'react'
import { useAuthenticationStore } from './stores/userAuthenticationStore'
import useVerifyToken from './querys/useVerifyToken'
import { toast } from 'react-toastify'

function App() {

  const { mutate } = useVerifyToken();
  const token = localStorage.getItem("token")
  const email = localStorage.getItem("email")
  const username = localStorage.getItem("username")


  useEffect(() => {


    //verificar si el token es válido y si el usuario es el mismo
    if (token && email && username) {
      mutate({ email: email, username: username, token: token }, {
        onSuccess(data) {

          toast("Usuario verificado", { type: "success" })
        },
        onError(data) {
          console.log(data)
          localStorage.removeItem("token")
          localStorage.removeItem("username")
          localStorage.removeItem("email")
          toast("La sesión expiró", { type: "warning" });
        }
      });

    }

  }, [])





  return (
    <Box >
      <NavBar />
      {!token && <FormLogin />}





    </Box>
  )
}

export default App
