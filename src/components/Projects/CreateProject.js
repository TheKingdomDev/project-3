import React from 'react'

const CreateProject = () => (
  <div className='row'>
    <form className='col s12'>
      <div className='row'>
        <div className='input-field col s6'>
          <input placeholder='Project Name' id='projectName' type='text' className='validate' />
        </div>
        <div className='row'>
          <div className='input-field col s6'>
            <textarea placeholder='Description'id='description' className='materialize-textarea' />
          </div>
          <div className='input-field col s6'>
            <input placeholder='Number of Collaborators' id='numCollab' type='text' className='validate' />
          </div>
        </div>
        <div className='row'>
          <a className='waves-effect waves-light btn' type='submit' name='action'>Create Project</a>
        </div>
      </div>
    </form>
  </div>
)

export default CreateProject
