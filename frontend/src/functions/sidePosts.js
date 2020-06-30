import React,{ useState, useEffect,useContext } from "react";
import axios from 'axios'
import { apiURL } from '../util/apiURL'
import { GiDrippingHoney } from 'react-icons/gi';
import { FaHeart } from 'react-icons/fa';


export default function SidePost({post, comments}){
        let title = "Click on a post to see it's comments"
    // Need to now write query for likes and comments!! to be able to get all comments and to get number value for likes
   
    
    return (
        <>
            <h1>{title}</h1>
            <div key = {post.postid} className = 'card-container'>
                    <div className = 'upper-container'>
                        <div className = 'image-container'>
                            <img src = {post.user_pic}/>
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

            <div className = "comments">
                    {comments.map(comment => {
                            return(
                                <div className = 'card-container'>
                    <div className = 'upper-container'>
                        <div className = 'image-container'>
                            <img src = {comment.user_pic}/>
                        </div>
                    </div>

                    <div className = 'lower-container'>
                        <h2>{comment.username}</h2>
                
                <p>{comment.comment}</p>            
                    </div>
            </div>
 
                            )
                    })}
            </div>
                      
        </>
    )
}

