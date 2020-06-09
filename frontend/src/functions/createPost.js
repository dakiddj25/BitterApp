import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { apiURL} from '../util/apiURL'


const CreatePost = ({handlePostSubmit}) => {
    const [tweet, setTweet] = useState("")
    // const [picture, setPicture] = useState("");
    


    return (
            <form onSubmit ={(e) => handlePostSubmit(e,tweet)} className="UserFeed">
                <textarea placeholder="Enter A Bitter post!" value ={tweet} onChange ={(e) => setTweet(e.target.value)} />
                 {/* <input type="file" /> */}
                 <br/>
                <button type="submit" > Post on Bitter </button>
            </form>
    )
}
export default CreatePost;
