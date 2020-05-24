import React from 'react'
import ExplorePage from './explore'
import SignUp from './signUp'

const welcomePage = () => {
    return (
        
        <div className = "welcomePage">
          <div className = "explore">
            <ExplorePage/>
          </div>

          <div className = "signUp">
            <SignUp/>
          </div>

        <button > </button>
        </div>
        
    )
}

export default welcomePage;