import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { apiURL} from '../util/apiURL'


const CreatePost = ({fetchUsersFeed, getPosts, updatePosts}) => {
    const [tweet, setTweet] = useState("")
    // const [picture, setPicture] = useState("");
    const user_id= localStorage.getItem("currentUserID")
    console.log(user_id)
    const API = apiURL()
    
  
    const handlePostSubmit = async (e) => {
        e.preventDefault()
        try {
        let res = await axios.post(`${API}/posts/`, {
                user_id: user_id,
                tweet: tweet
        })
        let postID = res.data.payload.id
        setTweet("");
        updatePosts();

        debugger
        let arrCaption = (tweet.value.split(' '));
        getHashtag(arrCaption, postID)
        
        }catch(err){
            console.log(err)
        }
        window.location.reload()
    }

    const getHashtag = async (arr, postID) => {
        debugger
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

useEffect(() => {
    
},[])

    return (
            <form onSubmit ={handlePostSubmit} className="UserFeed">
                <textarea placeholder="Enter A Bitter post!" value ={tweet} onChange ={(e) => setTweet(e.target.value)} />
                 {/* <input type="file" /> */}
                 <br/>
                <button type="submit" > Post on Bitter </button>
            </form>
    )
}
export default CreatePost;
