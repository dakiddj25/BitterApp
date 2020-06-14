import React, { useState, useEffect, useContext} from "react"
import Feedindex from '../functions/Feedindex'
import  CreatePost from '../functions/createPost'
import { apiURL} from '../util/apiURL'
import { AuthContext } from '../provider/AuthContext'
import axios from 'axios'


const AllPost =({showPosts})=>{
    const [posts, setPosts] = useState([]);
    const user_id= localStorage.getItem("currentUserID");
    const { token } = useContext(AuthContext);
    const API = apiURL();

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
            // debugger
            
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

    let res = await axios.get(`${API}/posts/`)
    // console.log(res)
    setPosts(res.data.payload);
}
    useEffect(() => {
        fetchPosts();
    },[])


    const showPost = (post) =>{
        debugger
    }

    return(
        <div>
            <CreatePost handlePostSubmit= {handlePostSubmit} />
            <div>
           <Feedindex posts={posts}  showPost={showPost} handlePostSubmit= {handlePostSubmit}/>
            </div>
         </div>
    )

}

export default AllPost;