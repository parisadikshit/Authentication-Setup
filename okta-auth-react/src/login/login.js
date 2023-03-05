import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const { oktaAuth, authState } = useOktaAuth();
   const [authenticated, isAuthenticated] = useState();
   const navigate = useNavigate();
   useEffect(()=>{
    if (authState?.isAuthenticated) {
        isAuthenticated(true);
        navigate('/home')
       }
    

   },[authState])
   
   const login = async () => {
      oktaAuth.signInWithRedirect();
   }

   return (
      <button onClick={login}>Login</button>
   )
}

export default Login;
