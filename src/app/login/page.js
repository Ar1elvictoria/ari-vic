'use client'
import React from "react"
import { login } from "../../Services/firebase/auth"

import "./login.css"

export default function Login() {

    const [state, setState] = React.useState({
        email:"",
        password:""
    })

    function onChange(event) {
        const value = event.target.value;
        const name=event.target.name;

        setState({
            ...state,
            [name]:value
        })
    }

    function onLogin(){
        const {email, password} = state;
        login(email, password)
    }

    return (
        <div className="container">
            <h2>BIENVENIDO/A!</h2>
            <input onChange={onChange} name="email" type="text" value={state.email}  placeholder="Ingresa tu Email"/>
            <input  onChange={onChange} name="password" type="password"  value={state.password} placeholder="Ingresa tu contraseña" />
            <button onClick={onLogin}>Login</button>
        </div>
    )
}