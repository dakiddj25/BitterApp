import React,{ useState, useEffect,useContext } from "react";

export default function sidePost({post}){

    return (
        <>
            <h1>User's Posts</h1>
                {post.map(user => {
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
                        </div>
                    )
                })}
            
        </>
    )
}