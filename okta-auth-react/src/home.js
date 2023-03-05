import React, { useEffect, useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
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
       
    },[])
    return (
        <>
        <pre>{JSON.stringify(user, null, 5)}</pre>
        <button onClick={logout}>logout</button>
        </>
    )
}