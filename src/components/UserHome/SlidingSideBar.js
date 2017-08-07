import React from 'react'
import { SideNav, SideNavItem, Button } from 'react-materialize'

const SlidingSideBar = (props) => (
  <div>
    <SideNav trigger={<Button>SIDE NAV DEMO</Button>}
    options={{ closeOnClick: true }}>
      <SideNavItem userView
        user={{
          background: 'img/office.jpg',
          image: 'img/yuna.jpg',
          name: 'John Doe',
          email: 'jdandturk@gmail.com'
        }}
      />
      <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
      <SideNavItem href='#!second'>Second Link</SideNavItem>
      <SideNavItem divider />
      <SideNavItem subheader>Subheader</SideNavItem>
      <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
    </SideNav>
  </div>
)

export default SlidingSideBar
