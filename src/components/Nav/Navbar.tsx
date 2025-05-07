import { Box, Button, Drawer, Grid, List, ListItem, ListItemButton, ListItemText, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router";

const NavBar = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    const navigate = useNavigate();
    const matches = useMediaQuery('(max-width:844px)');

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleOnClickPostbook = () => {
        navigate("/")
    }
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
                    {token && <Grid margin={2} spacing={2}>
                        <Button>


                            <Typography sx={styles.logoutTitleStyle} variant="h5">Perfil</Typography>

                        </Button>
                    </Grid>}
                    {token && <Grid margin={2} spacing={2}>
                        <Button>


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