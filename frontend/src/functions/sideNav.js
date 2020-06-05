import React from "react";
import { logout } from '../util/firebaseFunctions'
import { Link } from 'react-router-dom'
import "../css/exploreNav.css";

const TweetNav = () => {

    return (
    <div className="sidenav">
        <Link to= '/loggedin/tweet'>HOME</Link>
        <Link to= '/loggedin/Explore'>EXPLORE</Link>
        <Link to= '/loggedin/Profile'>PROFILE</Link>
        <a href="#LOGOUT" onClick = {logout} >LOGOUT</a>
        
      </div>
    )

}

export default TweetNav