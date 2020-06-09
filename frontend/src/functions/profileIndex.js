import React,{ useState, useEffect,useContext } from "react";
import { FaHeart } from 'react-icons/fa';
import { FaCommentAlt } from 'react-icons/fa';
// import { AuthContext } from '../provider/AuthContext'

export default function UserIndex({posts}){
//   debugger

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
                                        <div className = 'likeCommentRepost'>
                                            <FaHeart icon = 'FaHeart'/>
                                            <FaCommentAlt icon = 'FaCommentAlt'/>

                                        </div>
                                </div>
                        </div>
                    )
                })}
            
        </>
    )
}
