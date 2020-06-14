import React from "react";
import { Show } from '../functions/sidePosts'
import { GiDrippingHoney } from 'react-icons/gi';
import { FaHeart } from 'react-icons/fa';


export default function FeedIndex({posts, showPost}){


    return (
        <div className= 'feeding'>
            <h1></h1>
            
                {posts.map(post => {
                    {/* debugger */}

                   return <div key = {post.postid} className = 'card-container'>
                                <div className = 'upper-container'>
                                    <div className = 'image-container'>
                                        <img onClick = {() => {showPost(post)}} src = {post.user_pic}/>
                                    </div>
                                </div>

                                <div className = 'lower-container'>
                                    <h2>{post.username}</h2>
                            
                            <p>{post.tweet}</p>
                            <div className = 'likeCommentRepost'>
                                <p> <FaHeart icon = 'FaHeart' color =" yellow"/></p> 
                                <p> <GiDrippingHoney icon = 'GiDrippingHoney'/></p>
                            </div>             
                                </div>
                        </div>
                    {/* return <li className = 'tweet' key= {user.postid}> {user.tweet}</li> */}
                })}
                {/* <h3>{posts.firstname}</h3> */}
            
        </div>
    )
}
