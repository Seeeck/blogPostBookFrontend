


import { Box, Button, Grid } from '@mui/material'


import FormPost from './components/Forms/FormPost'
import useGetPosts from './querys/useGetPosts'
import { useEffect } from 'react';
import Posts from './components/Common/Posts';

function App() {
  const { data, fetchNextPage, refetch } = useGetPosts()


  return (
    <Box  >
      <Grid container sx={styles.gridContainerStyle} >

        <Grid size={{ xs: 10, sm: 9, md: 7, lg: 4 }} >
          <FormPost refetch={refetch} />
          {/* Posts*/}
          <Posts data={data} fetchNextPage={fetchNextPage} />
        </Grid>

      </Grid>

    </Box>
  )
}
const styles: { [key: string]: React.CSSProperties } = {
  gridContainerStyle: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 5
  },
}
export default App
