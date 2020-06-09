import React from "react";
import "../css/NavBar.css";


const ExplorerNav = ({handleString}) => {

    
    return (
       
    <ul className = "exploreNav">
        <li onClick = {() => handleString("")}><a href="#All">For You</a></li>
        <li onClick = {() => handleString("loveyourself")}><a href="#Love">Love</a></li>
        <li onClick = {() => handleString("explore")}><a href="#Entertainment">Entertainment</a></li>
        <li onClick = {() => handleString("summer")}><a href="#Summer">SummerTime</a></li>
        <li onClick = {() => handleString("nocorona")}><a href="#Covid-19">Covid-19</a></li>
    </ul>
    )

}

export default ExplorerNav