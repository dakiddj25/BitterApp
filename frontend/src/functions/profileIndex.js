import React,{ useState, useEffect,useContext } from "react";
import axios from 'axios'
import { FaHeart } from 'react-icons/fa';
import { FaCommentAlt } from 'react-icons/fa';
import { GiDrippingHoney } from 'react-icons/gi';
import { FaWindowClose } from "react-icons/fa";
import { apiURL} from '../util/apiURL'

// import { AuthContext } from '../provider/AuthContext'

export default function UserIndex({posts, fetchPosts}){
    const [likes, setLikes] = useState(false)
    const API = apiURL();

    const deletePost = async(post) => {
        try{
            console.log(post)
            let res = await axios.delete(`${API}/posts/${post}`);
            fetchPosts()
            debugger
      } catch (err){
          console.log(err)
     }
    }

    return (
        <>
            <h1>User's Posts</h1>
                {posts.map(user => {
                    return (
                        <div key = {user.postid} className = 'card-container'>
                            <p className='deletepost'> <FaWindowClose onClick = {() => {deletePost(user.postid)}} icon = 'FaWindowClose'/></p>
                                <div className = 'upper-container'>
                                    <div className = 'image-container'>
                                        <img src = {user.user_pic}/>                                   
                                    </div>
                                    {/* <div className="username">{user.username}</div>/ */}
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
