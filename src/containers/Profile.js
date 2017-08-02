import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AvatarCard from '../components/AvatarCard'

class Profile extends Component {
    render () {
        return (
            <div>
             <Navbar/>
             <div className='container'>
                <div className='row'>
                    <div className='col s4' style={{border:'1px solid blue'}}>
                      <AvatarCard />
                    </div>
                    <div className='col s8' style={{border:'1px solid red'}}>
                        <div className='container'>
                            Skills go here
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col s12' style={{border:'1px solid purple'}}>
                        Bio
                    </div>
                    <div className='col s12' style={{border:'1px solid green'}}>
                        Projects
                    </div>
                     <div className='col s12' style={{border:'1px solid orange'}}>
                        Tasks
                    </div>
                </div>
             </div> {/*end main container*/}
            <Footer />
            </div>
        )
    }
}

export default Profile
