import React,{ useState, useEffect,useContext } from "react";
import axios from "axios";
import { apiURL} from '../util/apiURL'
// import { AuthContext } from '../provider/AuthContext'

export default function UserIndex(){
//   debugger
    const [posts, setPosts] = useState([]);
    const API = apiURL();

useEffect(() => {
        
    const fetchPosts = async () => {
        let user_id = localStorage.getItem("currentUserID");
        
        let res = await axios.get(`${API}/posts/${user_id}`)
        // console.log(res)
        
        setPosts(res.data.payload);
    }
    fetchPosts();
    
}, []);

    return (
        <>
            <h1>User's Posts</h1>
                {posts.map(user => {
                    return (
                        <div key = {user.postid} className = 'card-container'>
                                <div className = 'upper-container'>
                                    <div className = 'image-container'>
                                        <img src = {user.user_pic}/>
                                    </div>
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
