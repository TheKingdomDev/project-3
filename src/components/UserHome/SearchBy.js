import React from 'react'
import { Dropdown, Button, NavItem } from 'react-materialize'

const SearchBy = (props) => (
  <div>
    <Dropdown trigger={<Button style={{color: '#6ece5a'}}>
      Search by...</Button>}>
      <NavItem id='search-by-user'>User</NavItem>
      <NavItem id='search-by-skill'>Skills</NavItem>
    </Dropdown>
  </div>
)

export default SearchBy
