import React from "react";
import { Show } from '../functions/sidePosts'


export default function FeedIndex({posts, showPost}){
    return (
        <div className= 'feeding'>
            <h1></h1>
            
                {posts.map(post => {
                    {/* debugger */}

                   return <div key = {post.postid} className = 'card-container'>
                                <div className = 'upper-container'>
                                    <div className = 'image-container'>
                                        <img src = {post.user_pic}/>
                                    </div>
                                </div>

                                <div className = 'lower-container'>
                                    <h2>{post.username}</h2>
                            
                            <p>{post.tweet}</p>
                                </div>
                        </div>
                    {/* return <li className = 'tweet' key= {user.postid}> {user.tweet}</li> */}
                })}
                {/* <h3>{posts.firstname}</h3> */}
            
        </div>
    )
}
