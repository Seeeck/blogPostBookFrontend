
import { useState } from 'react'

import { Box } from '@mui/material'
import FormLogin from './components/Forms/FormLogin'
import NavBar from './components/Nav/Navbar'

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
