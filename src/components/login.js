import React, { useState } from 'react'
import axios from 'axios'
import { useHistory} from 'react-router-dom'


    const Login = () =>{
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();
   

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //send results to backend
            history.push("/tweet")

        }
        catch (err){
            console.log(err)
        }
    }



    return(
        <>
        <img></img>
        <h3>See what's happening in the world right now!</h3>

        <form onSubmit = {handleSubmit}>

            <input id = 'email' placeholder = 'Email' value = {email} onChange = {(e) => {
                setEmail(e.currentTarget.value)
            }}/>

            <input id = 'userName' placeholder = 'Username' value = {userName} onChange = {(e) => {
                setUserName(e.currentTarget.value)
            }}/>

            <input id = 'password' placeholder = 'Password' type = "password"  value = {password} onChange = {(e) => {
                setPassword(e.currentTarget.value)}} autoComplete = "on" />

          

            <button>Login</button>
        </form>

        <p> or </p>
        <button>sign up</button>
        </>
    )

}

export default Login