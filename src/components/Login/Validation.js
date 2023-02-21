const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const numberRegex = /^[+-]?\d+$/

export const validation = (username, password) =>{
    if (!emailRegex.test(username)){
        return <p>Debe ser un correo electronico</p>
    }
    if (username.length === 0){
        return <p>Debes escribir tu correo</p>
    }
    if (username.length < 36){
        return <p>No puedes pasarte de 35 caracteres</p>
    }


    if (!numberRegex.test(password)){
        return <p>Tu contrasena debe contener al menos un numero</p>
    }
    if (password.length < 6){
        return <p>Tu contrasena debe contener al menos 6 caracteres</p>
    }
    if (password.length > 35){
        return <p>Tu contrasena debe contener como maximo 35 caracteres</p>
    }
}