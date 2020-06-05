import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useHistory} from 'react-router-dom'
import { login } from '../util/firebaseFunctions'
import { apiURL} from '../util/apiURL'
import { AuthContext } from '../provider/AuthContext'


    const Login = () =>{
    const [email, setEmail] = useState("")
    // const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();
    const { currentUser } = useContext(AuthContext);
    const API = apiURL();
   

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(email, password)
            let userid = await axios.get(`${API}/users/email/${currentUser.email}`)
            localStorage.setItem("currentUserID", userid.data.payload.id)
            //save id 
            history.push("/loggedin/tweet")

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

            {/* <input id = 'userName' placeholder = 'Username' value = {userName} onChange = {(e) => {
                setUserName(e.currentTarget.value)
            }}/> */}

            <input id = 'password' placeholder = 'Password' type = "password"  value = {password} onChange = {(e) => {
                setPassword(e.currentTarget.value)}} autoComplete = "on" />

          

            <button>Login</button>
        </form>

        <p> or </p>
        <button onClick = {()=> history.push('/')}>sign up</button>
        </>
    )

}

export default Login