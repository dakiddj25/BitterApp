import React,{ useState, useEffect,useContext } from "react";
import axios from 'axios'
import { apiURL } from '../util/apiURL'
import { GiDrippingHoney } from 'react-icons/gi';
import { FaHeart } from 'react-icons/fa';


export default function sidePost(post){
    const API = apiURL();
    
    const getcomment = async() => {
        try{
            let res = await axios.get(`${API}/comments/${post.postid}`)
            debugger
      } catch (err){
          console.log(err)
     }
    }
        let title = "Click on a post to see it's comments"
    // Need to now write query for likes and comments!! to be able to get all comments and to get number value for likes

    return (
        <>
            <h1>{title}</h1>
            <div key = {post.post.postid} className = 'card-container'>
                    <div className = 'upper-container'>
                        <div className = 'image-container'>
                            <img src = {post.post.user_pic}/>
                        </div>
                    </div>

                    <div className = 'lower-container'>
                        <h2>{post.post.username}</h2>
                
                <p>{post.post.tweet}</p>
                <div className = 'likeCommentRepost'>
                    <p> <FaHeart icon = 'FaHeart' color =" yellow"/></p> 
                    <p> <GiDrippingHoney icon = 'GiDrippingHoney'/></p>
                </div>             
                    </div>
            </div>

            
                      
        </>
    )
}

