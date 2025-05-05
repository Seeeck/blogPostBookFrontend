
import { useState } from 'react'

import { Box } from '@mui/material'
import FormLogin from './components/authentication/FormLogin'
import NavBar from './components/nav/Navbar'

function App() {

  const [looged, setLooged] = useState(false)

  return (
    <Box >
    
      {!looged &&
        <FormLogin />}
    </Box>
  )
}

export default App
