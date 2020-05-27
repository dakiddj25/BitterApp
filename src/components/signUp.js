import React, { useState } from 'react'
import axios from 'axios'
import { useHistory} from 'react-router-dom'
import { apiURL } from '../util/apiURL'

    const SignUp = () =>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [userPic, setUserPic] = useState("")
    const history = useHistory();
    const API = apiURL()

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
        <img src = "https://abs.twimg.com/sticky/illustrations/twitter_login_sidebar_illustration.png"></img>
        <h3>See what's happening in the world right now!</h3>

        <form onSubmit = {handleSubmit}>
            <input id = 'firstName' placeholder = 'First Name' value = {firstName} onChange = {(e) => {
                setFirstName(e.currentTarget.value)
            }} />

            <input id = 'lastName' placeholder = 'Last Name' value = {lastName} onChange = {(e) => {
                setLastName(e.currentTarget.value)
            }}/>

            <input id = 'email' placeholder = 'Email' value = {email} onChange = {(e) => {
                setEmail(e.currentTarget.value)
            }}/>

            <input id = 'userName' placeholder = 'Username' value = {userName} onChange = {(e) => {
                setUserName(e.currentTarget.value)
            }}/>

            <input id = 'password' placeholder = 'Password' type = "password"  value = {password} onChange = {(e) => {
                setPassword(e.currentTarget.value)}} autoComplete = "on" />

            <input id = 'user_pic' placeholder = 'profilepic' value = {userPic} onChange = {(e) => {
                setUserPic(e.currentTarget.value)
            }}/>

            <button>signUp</button>
        </form>

        <p> or </p>
        <button>Login</button>
        </>
    )

}

export default SignUp