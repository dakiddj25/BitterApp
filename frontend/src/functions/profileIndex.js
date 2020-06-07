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
                        <div className = 'tweet'>
                            <p key= {user.id}>{user.tweet}</p>
                        </div>
                    )
                })}
            
        </>
    )
}
