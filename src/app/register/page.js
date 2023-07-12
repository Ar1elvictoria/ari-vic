'use client'
import React from "react"
import { register } from "../../Services/firebase/auth"

import "./register.css"

export default function Register() {

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

    function onRegister(){
        const {email, password} = state;
        register(email, password)
    }

    return (
        <div className="container">
            <h2>BIENVENIDO/A!</h2>
            <input onChange={onChange} name="email" type="text" value={state.email}  placeholder="Ingresa tu Email"/>
            <input  onChange={onChange} name="password" type="password"  value={state.password} placeholder="Ingresa tu contraseña" />
            <button onClick={onRegister}>Registrarse</button>
        </div>
    )
}