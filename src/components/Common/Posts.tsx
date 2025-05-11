import { Box, Button, Grid, Typography } from "@mui/material";
import useGetPosts from "../../querys/useGetPosts";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SyncIcon from '@mui/icons-material/Sync';
type Props = {
    data: any
    fetchNextPage: () => void

}
const Posts = ({ data, fetchNextPage }: Props) => {

    //usar infinitequery
    //almacenar data en un estado
    //controlar cuando se llega al final de la pagina y envie la siguiente paginacion
    //paginar y agregar mas data al estado

    /*   data?.pages.map(data => data.data.data.data.map(data => {
          console.log(data)
      })) */

    const handleNextPage = () => {
        fetchNextPage();
    }



    return (
        <Grid container sx={styles.containerStyle}>



            {data?.pages.map(data => data.data.data.data.map(data => {

                return (
                    <Grid key={data.id} sx={styles.boxPostStyle}>
                        <Box sx={styles.boxUser}>
                            <AccountCircleIcon sx={styles.accountCircle} fontSize="large" />
                            <Typography sx={styles.userNameStyle}>{data.name}</Typography>
                        </Box>

                        <Typography sx={styles.messageStyle}>{data.message}</Typography>
                        {data?.pathImage && <img style={styles.imageURLStyle} src={"http://localhost:8000/storage/" + data.pathImage} />}

                        <Typography sx={styles.createdAtStyle} textAlign="end">{data.created_at}</Typography>

                    </Grid>
                )
            }))}

            <Grid>
                <Button onClick={handleNextPage}>
                    <SyncIcon sx={styles.loadMoreIcon} fontSize="large" />
                </Button>
            </Grid>

        </Grid>
    )
}
const styles: { [key: string]: React.CSSProperties } = {
    imageURLStyle: {
        width: "100%",
        objectFit: "cover"
    },
    containerStyle: {

        flexDirection: "column",
        alignItems: "center",
        width: "100%",
    },
    boxPostStyle: {
        marginTop: 2,
        marginBottom: 1,
        border: 0.5,
        borderRadius: 2,
        borderColor: "#1877f2",
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width: "100%",
        height: "auto"

    },
    boxUser: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    accountCircle: {
        margin: 1,
        marginLeft: 2,
        color: "#1877f2",
    },
    userNameStyle: {
        color: "#1877f2",
    },
    createdAtStyle: {
        color: "#1877f2",
        marginRight: 2
    },
    messageStyle: {
        margin: 2
    },
    loadMoreIcon: {
        color: "#1877f2",
    }
}
export default Posts;