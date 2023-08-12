/*
PRIVATE COMPONENT:-> are those components
that are only available under specific conditionS.
For ex: we have to show other components like pruducts etc when we are login only
*/
import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
//useNavigate is a hook that is used to navigate to another web pages..

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate('/');
        }
    });

    const collectData = async () => {
        console.warn(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        //fetch is a inbulit api function in js


        result = await result.json();
        console.warn(result);
        //localStorage to store data locally in web browser.
        localStorage.setItem("user", JSON.stringify(result));
        if (result) {
            navigate('/');
            //navigate is used to redirect to page after successsful signup
        }
    }
    return (
        <div className="register">
            <h1>Register</h1>

            <input className="inputBox" type="text"
                value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />

            <input className="inputBox" type="email"
                value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />

            <input className="inputBox" type="password"
                value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

            <button className="appButton" onClick={collectData} type="button">SignUp</button>
        </div>
    );
};
export default SignUp;