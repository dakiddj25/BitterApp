import React from 'react'
import ExplorePage from './explore'
import SignUp from './signUp'
import Feedindex from '../functions/Feedindex'
import  '../css/welcomePage.css'

const welcomePage = () => {
    return (
        
        <div className = "welcomePage">
          <div className = "explore">
            <ExplorePage/>
            <Feedindex/>
          </div>

          <div className = "signUp">
            <SignUp/>
          </div>

        
        </div>
        
    )
}

export default welcomePage;