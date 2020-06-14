import React, { useState }from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = ({handleSearch}) => {
    const [search, setSearch] = useState("")
    return(
        <nav>
            <NavLink className="links" exact to={"/"}> <img className = "logo" src='https://dejpknyizje2n.cloudfront.net/marketplace/products/geometric-bee-logo-sticker-1561735738.2410054.png' /> </NavLink>
            
            <form onSubmit ={(e) => handleSearch(e,search)} >
                <input placeholder="Search Bitter" value ={search} onChange ={(e) => setSearch(e.target.value)} />
                <button type="submit" > Search </button>
            </form>

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