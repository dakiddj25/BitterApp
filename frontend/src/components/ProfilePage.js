import React from 'react'
import { logout } from '../util/firebaseFunctions'
import ProfileIndex from '../functions/profileIndex'
import  CreatePost from '../functions/createPost'



const ProfilePage = () => {
   

    return (
        <>
        <h1>Welcome! Here is where your Posts Live!</h1>

                <CreatePost/>
            <div className = 'feedin'>
                <ProfileIndex />
            </div>
        <button onClick = {logout}>Log out</button>
        </>
    )
}

export default ProfilePage