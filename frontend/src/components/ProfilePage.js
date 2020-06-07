import React, {useState, useEffect} from 'react'
import { logout } from '../util/firebaseFunctions'
import ProfileIndex from '../functions/profileIndex'
import  CreatePost from '../functions/createPost'
import axios from "axios";
import { apiURL} from '../util/apiURL'




const ProfilePage = () => {
    // const { currentUser } = useContext(AuthContext);

    return (
        <>
        <h1>Welcome! Here is where your Posts Live!</h1>

                <CreatePost/>
            <div className = 'feedin'>
                <ProfileIndex />
            </div>
        </>
    )
}

export default ProfilePage