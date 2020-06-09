import React, { useState } from 'react'
import { useHistory} from 'react-router-dom'
import { apiURL } from '../util/apiURL'
import { signup } from '../util/firebaseFunctions'
import axios from 'axios'

    const SignUp = () =>{
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [userPic, setUserPic] = useState("")
    const history = useHistory();
    const API = apiURL()
    const CLOUDIANRY_URL = "https://api.cloudinary.com/v1_1/jones123/image/upload";
    const CLOUDIANRY_UPLOAD_PRESET = "n4oxudu9";


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
             await signup(email, password);
            debugger
            await axios.post(`${API}/users`, {
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                password: password,
                email: email,
                user_pic: userPic,
                // user_pic: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
            })
            //send results to backend
            // history.push("/loggedin/tweet")

        }
        catch (err){
            console.log(err)
        }
    }

    const uploadPicture = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0])
        data.append('upload_preset', CLOUDIANRY_UPLOAD_PRESET);
        data.append('cloud_name', 'jones123')
        let res = await fetch(CLOUDIANRY_URL, {
            method: 'Post',
            body: data
            }
        )
        const file = await res.json()
        setUserPic(file.secure_url)
       
    }



    return(
        <>
        <img src = "https://abs.twimg.com/sticky/illustrations/twitter_login_sidebar_illustration.png"></img>
        <h3>See what's happening in the world right now!</h3>

        <form onSubmit = {handleSubmit}>
            <input required id = 'firstName' placeholder = 'First Name' value = {firstName} onChange = {(e) => {
                setFirstName(e.currentTarget.value)
            }} />

            <input required id = 'lastName' placeholder = 'Last Name' value = {lastName} onChange = {(e) => {
                setLastName(e.currentTarget.value)
            }}/>

            <input required id = 'email' placeholder = 'Email' value = {email} onChange = {(e) => {
                setEmail(e.currentTarget.value)
            }}/>

            <input required id = 'userName' placeholder = 'Username' value = {userName} onChange = {(e) => {
                setUserName(e.currentTarget.value)
            }}/>

            <input required id = 'password' placeholder = 'Password' type = "password"  value = {password} onChange = {(e) => {
                setPassword(e.currentTarget.value)}} />

            <input id='userPic' type="file" onChange={uploadPicture} accept="image/png, image/jpeg"/>
            

            <button>signUp</button>
        </form>

        <p> or </p>
        <button onClick = {() =>{ history.push("/login")}}>Login</button>
        </>
    )

}

export default SignUp