import { Box, Button, Drawer, Grid, List, ListItem, ListItemButton, ListItemText, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router";
import { useAuthenticationStore } from "../../stores/userAuthenticationStore";
import useLogoutUser from "../../querys/useLogoutUser";
import { toast } from "react-toastify";

import useVerifyToken from "../../querys/useVerifyToken";

const NavBar = () => {
    const { mutate } = useLogoutUser()
    const { mutate: verifyToken } = useVerifyToken()
    const setToken = useAuthenticationStore(state => state.saveToken);
    const setUser = useAuthenticationStore(state => state.setUser);
    const token = useAuthenticationStore(state => state.token);
    const user = useAuthenticationStore(state => state.user)
    const setIsLogged = useAuthenticationStore(state => state.setIsLogged);
 
    const isLogged = useAuthenticationStore(state => state.isLogged);
    const navigate = useNavigate();
    const matches = useMediaQuery('(max-width:974px)');
    const [open, setOpen] = React.useState(false);


    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleOnClickPostbook = () => {
        navigate("/")
    }
    const handleLogout = () => {
        //remover token del backend
        //si se remueve del backend remover del frontend

        mutate({
            token: token,
            email: user.email,
            username: user.username,
        }, {
            onSuccess: data => {

                toast(data.data.message, { type: "success" })
                setToken(""),
                    setUser({ email: "", username: "" });
                setIsLogged(false)
                navigate("/login")

            }, onError: data => {
                toast(data.data.message, { type: "error" })

            }
        });

    }

    useEffect(() => {


        //verificar si el token es válido y si el usuario es el mismo
        if (token && user.email && user.username) {

            verifyToken({ email: user.email, username: user.username, token: token }, {
                onSuccess(data) {
                    navigate("/")
                    toast(data.data.message, { type: "success" })
                    setIsLogged(true);
                  
                },
                onError(data) {
                    setIsLogged(false)
                    setToken("")
                    setUser({ email: "", username: "" });
                    toast(data.data.message, { type: "warning" });
                    
                   


                }
            });

        }

    }, [])



    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['Login', 'Logout'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>

                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Box>
    );
    return (
        <Grid container bgcolor={"#1877f2"} sx={{ margin: 0, padding: 0 }}>
            <Grid size={9}>
                <Button>


                    <Typography onClick={handleOnClickPostbook} sx={styles.postBookTitleStyle} variant={matches ? "h4" : "h2"}>PostBook</Typography>
                </Button>
            </Grid>
            {matches ?
                <Grid size={3}>
                    <Button size="large" sx={styles.buttonMenuStyle} onClick={toggleDrawer(true)}><MenuIcon fontSize="large" />
                    </Button>
                </Grid>

                :
                <>
                    {!token && <Grid margin={2}>
                        <Button>


                            <Typography sx={styles.loginTitleStyle} variant="h5">Login</Typography>
                        </Button>
                    </Grid>}
                    {isLogged && <Grid margin={2} spacing={2}>
                        <Button>


                            <Typography sx={styles.logoutTitleStyle} variant="h5">Perfil</Typography>

                        </Button>
                    </Grid>}
                    {isLogged && <Grid margin={2} spacing={2}>
                        <Button onClick={handleLogout}>


                            <Typography sx={styles.logoutTitleStyle} variant="h5">Salir</Typography>
                        </Button>
                    </Grid>}
                </>}
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </Grid>
    )
}
const styles: { [key: string]: React.CSSProperties } = {
    postBookTitleStyle: {
        color: "white",
        fontWeight: "bolder",
        margin: 1
    },
    loginTitleStyle: {
        color: "white",
        fontWeight: "bold"
    },
    logoutTitleStyle: {
        color: "white",
        fontWeight: "bold"
    },
    buttonMenuStyle: {
        color: "white"
    }
}
export default NavBar;