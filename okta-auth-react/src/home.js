import React, { useEffect, useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from "antd";
import {
    AppstoreOutlined,
    LoginOutlined,
  } from "@ant-design/icons";

const { Item } = Menu;
export const Home = () =>{
    const {oktaAuth} = useOktaAuth();
    const [user, setUser] = useState();
    const getUser = async () =>{
        const user = await oktaAuth.getUser()
        setUser(user)
        return user;

    }
    const logout = () =>{
        oktaAuth.signOut();
    }
    useEffect(()=>{
       const user =  getUser();
       console.log(user)
       
    },[])
    return (
        <>
        <Menu mode="horizontal" >
        <Item
            key="/home"
            icon={<AppstoreOutlined />}
        >
            App
        </Item>
      
         
        <Item
            key="/"
            onClick={logout}
            icon={<LoginOutlined />}
            >
            Logout
            </Item>
   
         
        
      </Menu>
      <h1 className=" jumbotron text-center bg-primary sqaure"> User Info</h1>
      <pre>{JSON.stringify(user, null, 5)}</pre>
        </>
    )
}