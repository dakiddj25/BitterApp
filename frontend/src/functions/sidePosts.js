import React,{ useState, useEffect,useContext } from "react";
import axios from 'axios'
import { apiURL } from '../util/apiURL'
import { GiDrippingHoney } from 'react-icons/gi';
import { FaHeart } from 'react-icons/fa';
import CreateComment from "./createComment";


export default function SidePost({post, comments, handleCommentSubmit}){
        let title = "Click on a post to see it's comments"
        const [makeComment, setMakeComment] = useState(false);
        if(!post.user_pic){
            post = {
                user_pic : "https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320944.jpg",
                username : "Select a post to view it's comments",
                tweet : "Press the honey comb to add a comment"
            }
        }
        

    const handleComment =(e,comment)=>{
        handleCommentSubmit(e,comment)
    }

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
                </div>
                <div className = 'likeCommentRepost'>
                        <p onClick ={()=> setMakeComment(!makeComment)}> <GiDrippingHoney icon = 'GiDrippingHoney'/></p>
                </div> 
            </div>

           {makeComment? <CreateComment handleComment = {handleComment} setMakeComment = {setMakeComment}/>: null}

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

