import React from "react"
import ExploreNav from '../functions/explorerNav'

const explore =()=>{

    // it should be fecthing the data from the explore table

    return(
        <div>
            <h1>Explore</h1>
            {/* <h4>Explore Nav</h4> */}
            <ExploreNav/>
            {/* <p>Big HeadLine</p> */}
            {/* <p>Ul with all the post on the explore page</p> */}
            {/* <p> the Explore nav will just change the post based on search related Hashtags basedto the title</p> */}
        </div>
    )

}

export default explore;