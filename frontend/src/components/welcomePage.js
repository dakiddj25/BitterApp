import React, { useState } from 'react'
import ExplorePage from './explore'
import SignUp from './signUp'
// import Feedindex from '../functions/Feedindex'
import  '../css/welcomePage.css'
import NavBar from './NavBar'


const WelcomePage = () => {
const [search, setSearch] = useState("")

  const handleSearch = (e,searching) => {
    e.preventDefault();
    debugger
    setSearch(searching);
    // setSearch("")
  }
  
 
    return (
      <>
      <NavBar handleSearch ={handleSearch}/>
      <div className = "welcomePage">
        <div className = 'welcomeExplore'>
          <div className = "explore">
              <ExplorePage search = {search}/>
            </div>
        </div>
         

          <div className = "signUp">
            <SignUp/>
          </div>

        
        </div>
        </>
    )
}

export default WelcomePage;