import React from 'react'

const signUp = () =>{

    return(
        <>
        <img></img>
        <h3>See what's happening in the world right now!</h3>

        <form>
            <input id = 'firstName' placeholder = 'First Name' />
            <input id = 'lastName' placeholder = 'Last Name' />
            <input id = 'email' placeholder = 'Email' />
            <input id = 'userName' placeholder = 'Username' />
            <input id = 'password' placeholder = 'Password'  />
            <input id = 'user_pic' placeholder = 'profilepic' />
            <button>signUp</button>
        </form>

        <p> or </p>
        <button>Login</button>
        </>
    )

}

export default signUp