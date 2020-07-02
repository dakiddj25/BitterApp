import React,{ useState, useEffect,useContext } from "react";
import { FaHeart } from 'react-icons/fa';
import { FaCommentAlt } from 'react-icons/fa';
import { GiDrippingHoney } from 'react-icons/gi';
// import { AuthContext } from '../provider/AuthContext'

export default function UserIndex({posts}){
    const [likes, setLikes] = useState(false)

    return (
        <>
            <h1>User's Posts</h1>
                {posts.map(user => {
                    return (
                        <div key = {user.postid} className = 'card-container'>
                                <div className = 'upper-container'>
                                    <div className = 'image-container'>
                                        <img src = {user.user_pic}/>
                                    </div>
                                </div>

                                <div className = 'lower-container'>
                                    <h2>{user.username}</h2>
                                    <p>{user.tweet}</p>
                                       
                                </div>

                                <div className = 'likeCommentRepost'>
                                           <p onClick= {()=> setLikes(!likes)}> {likes? <FaHeart icon = 'FaHeart' color= 'yellow' /> : <FaHeart icon = 'FaHeart' />} </p> 
                                          <p> <GiDrippingHoney icon = 'GiDrippingHoney'/></p>
                                        </div>
                        </div>
                    )
                })}
            
        </>
    )
}
