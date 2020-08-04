import React from "react";
import { logout } from '../util/firebaseFunctions'
import { NavLink } from 'react-router-dom'
import "../css/NavBar.css";
import { FaHome } from 'react-icons/fa';
import { FaIcons } from 'react-icons/fa';
import { FaMale } from 'react-icons/fa';
import { FaEject } from 'react-icons/fa';


const TweetNav = () => {

    return (
    <div className="sidenav">
        <img src= 'https://dejpknyizje2n.cloudfront.net/marketplace/products/geometric-bee-logo-sticker-1561735738.2410054.png' />
        <br/>
        <br/>
        <NavLink to= '/loggedin/tweet'> {<FaHome icon = 'FaHome'/> }HOME</NavLink>
        <br/>
        {/* <Link to= '/loggedin/Explore'>{<FaIcons icon = 'FaIcons'/> }EXPLORE</Link> */}
        <br/>
        <NavLink to= '/loggedin/Profile'>{<FaMale icon = 'FaMale'/> }PROFILE</NavLink>
        <br/>
        <br/>
        <a href="#LOGOUT" onClick = {logout} >{<FaEject icon = 'FaEject'/>}LOGOUT</a>
        
      </div>
    )

}

export default TweetNav