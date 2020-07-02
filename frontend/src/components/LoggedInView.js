import React, { useState, useContext,useEffect } from 'react'
import { AuthContext } from '../provider/AuthContext'
import { Route } from 'react-router-dom'
import { apiURL} from '../util/apiURL'
import SideNav from '../functions/sideNav'
import Tweet from '../components/TweetPage'
import ProfilePage from '../components/ProfilePage'
import Explore from '../components/explore'
import axios from "axios";
import SidePost from '../functions/sidePosts'
import '../css/mains.css'



const LoggedInView = () => {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const API = apiURL();
    const { token } = useContext(AuthContext);
    const user_id = localStorage.getItem("currentUserID")
    

    const showPosts = async(post) => {
        try{
            let res = await axios.get(`${API}/comments/${post.postid}`)
            setComments(res.data.payload)
            setPost(post)
            debugger
      } catch (err){
          console.log(err)
     }
    }


    const handleCommentSubmit = async (comment) => {
        try {
            let res = await axios({
                method: "post",
                url:`${API}/comments`,
                headers: {
                    "AuthToken": token
                },
                data: {
                    post_id: post.postid,
                    user_id: user_id,
                    comment: comment,
                } 
            })
           
            showPosts(post);
        
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        showPosts();
    },[])
   
    return (
        <div className = 'warper'>

            <div className = 'comp1'>
                <SideNav/>
            </div>
            
           
             <div className = 'comp2'>
                <Route path ="/loggedin/tweet">
                    <Tweet showPosts = {showPosts}/>
                </Route>

                    <Route path ="/loggedin/Profile">
                        <ProfilePage/>
                    </Route>


                    <div className = "trys">
                        <Route path ="/loggedin/explore">
                            <Explore/>
                        </Route>
                    </div>
                </div>

                <div className = 'comp3'>
                    <Route path ="/loggedin/Profile">
                        
                            <Explore/>
                        
                    </Route>

                    <Route path ="/loggedin/tweet">
                        <SidePost post = {post} comments = {comments} handleCommentSubmit ={handleCommentSubmit}/>
                        {/* <Explore/> */}
                    </Route>
                    
                </div>


             </div>
        

        
    )

}


export default LoggedInView