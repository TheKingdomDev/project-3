import React from 'react'
// import SearchBy from './SearchBy'

const SearchBar = () => (
  <div className='row'>
    <form className='col s8 offset-s2'>
      <div className='input-field'>
        <input placeholder='Search for a project or user'
          id='search' type='search' required />
        <label className='label-icon' htmlFor='search' />
        <i className='material-icons'>close</i>
      </div>
    </form>
  </div>
)

export default SearchBar
