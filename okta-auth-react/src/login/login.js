import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { useNavigate } from 'react-router-dom';
import { Menu } from "antd";
import {
   AppstoreOutlined,
   LoginOutlined,
 } from "@ant-design/icons";
 const { Item } = Menu;


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
      <>
      <Menu mode="horizontal" >
        <Item
          key="/"
          icon={<AppstoreOutlined />}
        >
          <a href="/">App</a>
        </Item>
      
         
            <Item
              key="/login"
            onClick={login}
              icon={<LoginOutlined />}
            >
            Login
            </Item>
   
         
        
      </Menu>
    </>
  


   )
}

export default Login;
