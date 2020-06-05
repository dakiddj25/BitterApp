import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
    return(
        <nav>
            <NavLink className="links" exact to={"/"}> Home(Logo)</NavLink>
            
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