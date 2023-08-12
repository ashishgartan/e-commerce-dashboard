import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
/*
    use of OUTLET: as our private component is wrapper 
    and in it we pass private component as probs 
    so to handle these we use OUTLET.
*/
/**
 * Word “props” implies “properties”, and its working functionality 
 * is quite similar to HTML attributes.
 * Basically, these props components are read-only components. 
 * In ReactJS, the data can be passed from one component to another component 
 * using these props,similar to how the arguments are passed in a function.
 */

const PrivateComponent = () => {
    const auth = localStorage.getItem("user");
    return auth ? <Outlet /> : <Navigate to="/signup" />;
    //agr authentication sahi hai to component show ho nahi 
    //to redirect kr do sign up page par.... 
};

export default PrivateComponent;