import React, { useEffect, useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

export const Home = () => {
    const { oktaAuth } = useOktaAuth();
    const [user, setUser] = useState();
    const getUser = async () => {
        const user = await oktaAuth.getUser()
        setUser(user)
        return user;

    }
    const logout = () => {
        oktaAuth.signOut();
    }
    useEffect(() => {
        const user = getUser();
        console.log(user)

    }, [])
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <Typography variant="h6"
                        component="div" sx={{ flexGrow: 1 }}>
                        Simple React App
                    </Typography>
                    <Button color="inherit" onClick={logout}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
              
                <Typography variant="h5"
                        align="center"
                        component="div" sx={{ flexGrow: 1 }}>
                        <pre>{JSON.stringify(user, null, 5)}</pre>
                    </Typography>

            </Box>

        </>
    )
}