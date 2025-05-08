


import { Box } from '@mui/material'
import FormLogin from './components/Forms/FormLogin'


import NavBar from './components/Nav/Navbar'
import { useEffect, useState } from 'react'
import { useAuthenticationStore } from './stores/userAuthenticationStore'
import useVerifyToken from './querys/useVerifyToken'
import { toast } from 'react-toastify'

function App() {

  const { mutate } = useVerifyToken();
  const token = useAuthenticationStore(state => state.token);
  const user = useAuthenticationStore(state => state.user);
  const setToken = useAuthenticationStore(state => state.saveToken)
  const setUser = useAuthenticationStore(state => state.setUser)
  const setIsLogged = useAuthenticationStore(state => state.setIsLogged);
  const isLogged = useAuthenticationStore(state => state.isLogged);
  useEffect(() => {


    //verificar si el token es válido y si el usuario es el mismo
    if (token && user.email && user.username) {
      mutate({ email: user.email, username: user.username, token: token }, {
        onSuccess(data) {

          toast("Usuario verificado", { type: "success" })
          setIsLogged(true);
        },
        onError(data) {
          toast("La sesión expiró", { type: "warning" });
          setToken("")
          setUser({ email: "", username: "" });
          setIsLogged(false)

        }
      });

    }

  }, [])





  return (
    <Box >
      <NavBar />
      {!isLogged && <FormLogin />}
    </Box>
  )
}

export default App
