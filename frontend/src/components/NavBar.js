import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
    return(
        <nav>
            <NavLink className="links" exact to={"/"}> <img className = "logo" src='https://dejpknyizje2n.cloudfront.net/marketplace/products/geometric-bee-logo-sticker-1561735738.2410054.png' /> </NavLink>
            
            <input placeholder='Search Bitter' />
            <button>

                <NavLink to={"/login"}>login</NavLink>
            </button>
            
            <button>
                <NavLink to={"/signUp"}>Sign Up</NavLink>
            </button>
        </nav>
    )
}

export default NavBar;