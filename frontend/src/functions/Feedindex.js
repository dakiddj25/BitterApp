import React from "react";
import { Show } from '../functions/sidePosts'
import { GiDrippingHoney } from 'react-icons/gi';
import { FaHeart } from 'react-icons/fa';
import { FaWindowClose } from "react-icons/fa";
import { apiURL} from '../util/apiURL'
import axios from 'axios'



export default function FeedIndex({posts, showPost}){
    const user_id = localStorage.getItem("currentUserID");
    const API = apiURL();

    const deleteComment = async(post) => {
        try{
            console.log(post)
            let res = await axios.delete(`${API}/posts/${post}`)
            debugger
      } catch (err){
          console.log(err)
     }
    }

    return (
        <div className= 'feeding'>
            <h1></h1>
            
                {posts.map(post => {
                    {/* debugger */}
                    
                   return <div onClick = {() => {showPost(post)}} key = {post.postid} className = 'card-container'>
                                    {Number(user_id) === post.usersid? <p> <FaWindowClose onClick = {() => {deleteComment(post.postid)}} icon = 'FaWindowClose'/></p>: null}
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
