import React from 'react'
import { Route } from 'react-router-dom'
import SideNav from '../functions/sideNav'
import Tweet from '../components/TweetPage'
import ProfilePage from '../components/ProfilePage'
import Explore from '../components/explore'
import '../css/mains.css'
import SidePost from '../functions/sidePosts'


const LoggedInView = () => {
    const showPosts = (post) => {
        debugger
    }


   
    return (
        <div className = 'warper'>

            <div className = 'comp1'>
                <SideNav/>
            </div>
            
           
             <div className = 'comp2'>
                <Route path ="/loggedin/tweet">
                    <Tweet showPost = {showPosts}/>
                </Route>

                    <Route path ="/loggedin/Profile">
                        <ProfilePage/>
                    </Route>


                    <div className = "trys">
                        <Route path ="/loggedin/explore">
                            <Explore/>
                        </Route>
                    </div>
                </div>

                <div className = 'comp3'>
                    <Route path ="/loggedin/Profile">
                        <div className = 'explore'>
                            <Explore/>
                        </div>
                    </Route>

                    <Route path ="/loggedin/tweet">
                        {/* <SidePost/> */}
                        <Explore/>
                    </Route>
                    
                </div>


             </div>
        

        
    )

}


export default LoggedInView