import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useNavigate } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Login = () => {
  const { oktaAuth, authState } = useOktaAuth();
  const [authenticated, isAuthenticated] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (authState?.isAuthenticated) {
      isAuthenticated(true);
      navigate('/home')
    }


  }, [authState])

  const login = async () => {
    oktaAuth.signInWithRedirect();
  }

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
          <Button color="inherit" onClick={login}>Login</Button>
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
          <FavoriteIcon/>I just wanna stay in that lavender haze<FavoriteIcon/>
        </Typography>

      </Box>
    </>

  )
}

export default Login;
