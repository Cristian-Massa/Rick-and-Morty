import React, { useState } from "react";
import { DefaultButton, ModalDiv } from "../Generalstyles";
export default function Login( props ) {

    const [userData, setUserData] = useState({username: '', password: ''})

    const handleInputChange = (e) =>{
        setUserData(
            {...userData,
                [e.target.name]: e.target.value
            }
        )
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        props.login(userData)
    }
    const [ errors, setErrors] = useState({username: '', password: ''})

    const handleError = (e) =>{
        
    }

    return (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" alt="logo" width='500px' />
        <ModalDiv>
            <h2>Bienvenido</h2>
            <h2>Logueate para ver las imagenes</h2>
            <form action="" onClick={handleSubmit}>
                <label>Usuario:</label>
                <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>
                <label>Contraseña:</label>
                <input type="password" name="password" value={userData.password} onChange={handleInputChange}/>
                <DefaultButton>Ingresar</DefaultButton>
            </form>
        </ModalDiv>
        </div>
    )
};
