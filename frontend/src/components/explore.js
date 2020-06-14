import React, { useState, useEffect }from "react"
import ExploreNav from '../functions/explorerNav'
import axios from 'axios'
import { apiURL} from '../util/apiURL'
import Feedindex from '../functions/Feedindex'


const Explore =({search})=>{
    // it should be fecthing the data from the explore hashtags
    const [posts, setPosts ] = useState([])
   
    const handleString = (str) => {
        // hashtagString = str;
        fetchPosts(str)
    }

    const API = apiURL();
    const fetchPosts = async (hashtagString = "explore") => {
        try{
            // debugger
            let res = await axios.post(`${API}/hashtag/getHashtag`, {hashtag: hashtagString})
            // debugger
            let postArr = res.data.payload
            if(postArr.length === 0 ){
                setPosts([{
                    tweet: "No Results Found"
                }])
            } else{
                setPosts(res.data.payload)
            }
            
        }catch(err){
            console.log(err)
            setPosts([])
        }
    }

    useEffect(() => {
       
        fetchPosts();
    },[])

    if(search !== ""){
        fetchPosts(search)
    }
 

    return(
        <div className = 'explorePage' >
            <h1>Explore Bitter</h1>
            {/* <h4>Explore Nav</h4> */}
            <ExploreNav handleString={handleString}/>
            <Feedindex posts={posts} />
           
        </div>
    )

}

export default Explore;