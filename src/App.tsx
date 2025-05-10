


import { Box, Grid } from '@mui/material'


import FormPost from './components/Forms/FormPost'

function App() {






  return (
    <Box >
      <Grid container sx={styles.gridContainerStyle} >

        <Grid size={{ xs: 10, sm: 9, md: 7, lg: 4 }} >
          <FormPost />
          {/* Posts*/}
        </Grid>
      </Grid>


    </Box>
  )
}
const styles: { [key: string]: React.CSSProperties } = {
  gridContainerStyle: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10
  },
}
export default App
