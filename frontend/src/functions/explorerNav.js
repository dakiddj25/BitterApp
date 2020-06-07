import React from "react";
import "../css/exploreNav.css";


const ExplorerNav = ({handleString}) => {

    
    return (
       
    <ul className = "exploreNav">
        <li onClick = {() => handleString("nocorona")}><a href="#Corona">For You</a></li>
        <li onClick = {() => handleString("nocorona")}><a href="#Covid-19">Covid-19</a></li>
        <li onClick = {() => handleString("Love")}><a href="#Entertainment">Entertainment</a></li>
        <li onClick = {() => handleString("funny")}><a href="#TheScoop">HOT Scoop</a></li>
        <li onClick = {() => handleString("summer")}><a href="#Summer">SummerTime</a></li>
        <li onClick = {() => handleString("")}><a href="#All">HUH?</a></li>
    </ul>
    )

}

export default ExplorerNav