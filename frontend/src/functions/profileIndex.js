import React,{ useState, useEffect } from "react";
import axios from "axios";
import { apiURL} from '../util/apiURL'

// import { AuthContext } from '../provider/AuthContext'

export default function UserIndex( user = ""){
    const [posts, setPosts] = useState([]);
    
    // const { currentUser } = useContext(AuthContext);
    

    useEffect(() => {
        const API = apiURL()
        const fetchPosts = async () => {
            let user_id = localStorage.getItem("currentUserID");
            
            let res = await axios.get(`${API}/posts/${user_id}`)
            // console.log(res)
            
            setPosts(res.data.payload);
        }
        fetchPosts();
    },[])

    return (
        <div>
            <h1>Users Posts</h1>
            <ul>
                {posts.map(user => {
                    return <li key= {user.id}>{user.tweet}</li>
                })}
            </ul>
        </div>
    )
}
