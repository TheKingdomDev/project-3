import React from 'react'
// import SearchBy from './SearchBy'

const SearchBar = (props) => {
  return (
  <div className='row'>
    <form className='col s8 offset-s2'>
      <div className='input-field'>
        <input placeholder='Search for a project or user'
            id='search' type='search' required onChange={props.getSearchResults}/>
        <label className='label-icon' htmlFor='search' />
        <i className='material-icons'>close</i>
      </div>
    </form>
  </div>
)}

export default SearchBar
