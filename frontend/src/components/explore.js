import React, { useState, useEffect }from "react"
import ExploreNav from '../functions/explorerNav'
import axios from 'axios'
import { apiURL} from '../util/apiURL'
import Feedindex from '../functions/Feedindex'



const Explore =()=>{
    // it should be fecthing the data from the explore hashtags
    const [posts, setPosts ] = useState([])
    

    useEffect(() => {
        const API = apiURL();
        const fetchPosts = async () => {
            try{
                let res = await axios.post(`${API}/hashtag/getHashtag`, {hashtag: "summer"})
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
        fetchPosts();
    },[])



    return(
        <div >
            <h1>Explore</h1>
            {/* <h4>Explore Nav</h4> */}
            <ExploreNav/>
            <Feedindex posts={posts} />
           
        </div>
    )

}

export default Explore;