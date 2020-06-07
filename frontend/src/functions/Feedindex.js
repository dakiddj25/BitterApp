import React from "react";
// import axios from "axios";
import '../css/tweets.css'
// import '../css/prac.css'

export default function FeedIndex({posts}){
    return (
        <div >
            <h1>Bitter Posts</h1>
            
                {posts.map(user => {
                    {/* debugger */}

                   return <div key = {user.postid} className = 'card-container'>
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
                    {/* return <li className = 'tweet' key= {user.postid}> {user.tweet}</li> */}
                })}
                {/* <h3>{posts.firstname}</h3> */}
            
        </div>
    )
}
