import React from 'react'
import { SideNav, SideNavItem } from 'react-materialize'
import { Link } from 'react-router-dom'

const SlidingSideBar = (props) => (
  <div>
    <SideNav trigger={<i className='material-icons'>
        dehaze</i>}
      options={{ closeOnClick: true }}>
      <SideNavItem userView
        user={{
          background: '/assets/material-code_300x176.jpg',
          image: props.user.profilePictureURL,
          name: props.user.displayName
        }}
      />
      <Link to='/home'>
        <SideNavItem icon='home'>Home</SideNavItem>
      </Link>
      <Link to='/project'>
        <SideNavItem icon='folder'>Projects</SideNavItem>
      </Link>
      <Link to='/project:details'>
        <SideNavItem icon='format_list_numbered'>Tasks</SideNavItem>
      </Link>
      <Link to='/profile'>
        <SideNavItem icon='person'>{props.user.displayName}</SideNavItem>
      </Link>
    </SideNav>
  </div>
)

export default SlidingSideBar
