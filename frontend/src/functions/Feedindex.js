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

                   return <div key = {user.postid} className = 'tweet'>
                                <div className = 'tweetHead'>
                                    <h3>{user.username}</h3>
                                    <img src = {user.user_pic}/>
                                </div>
                            <p>{user.tweet}</p>
                        </div>
                    {/* return <li className = 'tweet' key= {user.postid}> {user.tweet}</li> */}
                })}
                {/* <h3>{posts.firstname}</h3> */}
            
        </div>
    )
}
