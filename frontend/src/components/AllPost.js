import React, { useState, useEffect} from "react"
import Feedindex from '../functions/Feedindex'
import { apiURL} from '../util/apiURL'
import axios from 'axios'


const AllPost =()=>{
    const [posts, setPosts] = useState([]);
    
    // it should be fecthing the data from the posts table

    useEffect(() => {
        const API = apiURL();
        const fetchPosts = async () => {

            let res = await axios.get(`${API}/posts/`)
            // console.log(res)
            setPosts(res.data.payload);
        }
        fetchPosts();
    },[])

    return(
        <div>
            
           <Feedindex posts={posts} />
         </div>
    )

}

export default AllPost;