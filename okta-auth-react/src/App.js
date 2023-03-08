import './App.css';
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import { LoginCallback, Security } from '@okta/okta-react';
import Login from './login/login';
import { Home } from './home';
import { toRelativeUrl, OktaAuth } from '@okta/okta-auth-js';
import React,{ useEffect } from 'react';
import Protected from './protected/protected';
const oktaAuth = new OktaAuth({
  issuer: `${process.env.REACT_APP_AUTHORIZATION_SERVER_URI}`,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email'],
  responseType:'token',
  pkce: true

})

function App() {
  

  useEffect(() => {
    return () => {
      oktaAuth.options.restoreOriginalUri = undefined
    }
  }, [])
  
   const restoreOriginalUri = async (_oktaAuth, originalUri) =>{
    window.location.replace(toRelativeUrl(originalUri|| '/', window.location.origin))

  }
  return (
    
         <Router>
          <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>

          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/login/callback' element={<LoginCallback/>}/>
            <Route path='/home' element={<Protected element={<Home/>}/>}/>
          </Routes>
          </Security>

         </Router>

  );
}

export default App;
