import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../provider/AuthContext'
import ProfileIndex from '../functions/profileIndex'
import  CreatePost from '../functions/createPost'
import axios from "axios";
import { apiURL} from '../util/apiURL'
// import '../css/mains.css'



const ProfilePage = () => {
    const { token } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    const API = apiURL();
    const user_id = localStorage.getItem("currentUserID")
    
  
    const handlePostSubmit = async (e,tweet) => {
        e.preventDefault()
        try {
            let res = await axios({
                method: "post",
                url:`${API}/posts`,
                headers: {
                    "AuthToken": token
                },
                data: {
                    user_id: user_id,
                    tweet: tweet,
                } 
                       
                   
            })
            
            let postID = res.data.payload.id;
            res.data.payload.postid = postID;
            let arrCaption = (tweet.split(' '));
            getHashtag(arrCaption, postID)
            fetchPosts()
            // setPosts(prevPost => {
            //     return [ res.data.payload, ...prevPost]
            // })
        
        }catch(err){
            console.log(err)
        }
    }

    const getHashtag = async (arr, postID) => {
        // debugger
        let newHash = ""
        arr.forEach((word) =>{
            if(word[0] === "#"){
                newHash = word
         }
       })
       try{
           await axios.post(`${API}/hashtag/`, { post_id:postID, hashtag:newHash });
     } catch (err){
         console.log(err)
    }
}

const fetchPosts = async () => {
    let user_id = localStorage.getItem("currentUserID");
    
    let res = await axios.get(`${API}/posts/${user_id}`)
    // console.log(res)
    
    setPosts(res.data.payload);
}

useEffect(() => {

    fetchPosts();
    
}, []);

    return (
        <div>
        <h1>Welcome! Here is where your Posts Live!</h1>

                <CreatePost handlePostSubmit={handlePostSubmit}/>
            <div >
                <ProfileIndex posts ={posts} fetchPosts={fetchPosts}/>
            </div>

            <div class="grid-container">
                <div class="item1">Header</div>
                <div class="item2">Menu</div>
                {/* <div class="item3">Main</div>   */}
                {/* <div class="item4">Right</div> */}
                <div class="item5">Footer</div>
            </div>
        </div>
    )
}

export default ProfilePage