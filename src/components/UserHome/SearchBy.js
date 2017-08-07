import React from 'react'
import { Dropdown, Button, NavItem } from 'react-materialize'

const SearchBy = (props) => (
  <div>
    <Dropdown trigger={<Button style={{color: '#6ece5a'}}>
      Search by...</Button>}>
      <NavItem id='search-by-project'>Project</NavItem>
      <NavItem id='search-by-user'>User</NavItem>
    </Dropdown>
  </div>
)

export default SearchBy
