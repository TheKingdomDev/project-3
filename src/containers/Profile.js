import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import AvatarCard from '../components/Profile/index'
// import Skills from '../components/Profile/index'
// import Accounts from '../components/Profile/index'
// import Bio from '../components/Profile/index'
// import Projects from '../components/Profile/index'
// import Tasks from '../components/Profile/index'
import { 
    AvatarCard,
    Skills,
    Accounts,
    Bio,
    Projects,
    Tasks
 } from '../components/Profile/index'

import TestComponent from '../components/Profile/AvatarCard'

class Profile extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>
             <Navbar/>
             <div className='container'>
                <div className='row'>
                    <div className='col s4' style={{border:'1px solid blue'}}>
                         <AvatarCard />   
                         {/* <TestComponent />   */}
                    </div>
                    <div className='col s8' style={{border:'1px solid red'}}>
                        <div className='container'>
                               <Skills /> 
                             <Accounts />   
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col s12' style={{border:'1px solid purple'}}>
                           <Bio />  
                    </div>
                    <div className='col s12' style={{border:'1px solid green'}}>
                           <Projects />   
                    </div>
                     <div className='col s12' style={{border:'1px solid orange'}}>
                           <Tasks />   
                    </div>
                </div>
             </div> {/*end main container*/}
            <Footer />
            </div>
        )
    }
}

export default Profile
