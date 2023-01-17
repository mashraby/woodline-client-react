import React, { useContext } from 'react';
import { AuthTokenContext } from '../Contexts/AuthTokenContext/AuthTokenContext';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';

const Private = () => {
    const {token, setToken} = useContext(AuthTokenContext)
    
    if(token) {
        return <Home />
    } else {
        return <Login />
    }
}

export default Private;
