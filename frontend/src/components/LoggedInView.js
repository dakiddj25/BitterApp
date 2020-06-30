import React, { useState } from 'react'
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
    const [post, setPosts] = useState("")
    const [comments, setComments] = useState([])
    const API = apiURL();
    

    const showPosts = async(post) => {
        try{
            let res = await axios.get(`${API}/comments/${post.postid}`)
            setComments(res.data.payload)
            setPosts(post)
            debugger
      } catch (err){
          console.log(err)
     }
    }


   
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
                        <div className = 'explore'>
                            <Explore/>
                        </div>
                    </Route>

                    <Route path ="/loggedin/tweet">
                        <SidePost post = {post} comments = {comments} />
                        {/* <Explore/> */}
                    </Route>
                    
                </div>


             </div>
        

        
    )

}


export default LoggedInView