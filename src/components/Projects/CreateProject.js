import React, { Component } from 'react'
import {Modal, Button, Input, Row, Form} from 'react-materialize'

import { }

class CreateProject extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      form: {
        name: '',
        description: '',
        numCollab: 0,
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange (e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name

    this.setState((prevState) => {
      return { form: Object.assign(prevState.form, { [name]: value})}
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    console.log(this.state.form)
  }

  componentDidUpdate () {
    console.log(this.state)
  }

  render () {
    return (
      <Modal
        header='Create New Project'
        trigger={<Button style={styles.center}>Create Project</Button>}>
          <Row>
          <Input s={12} name='name' label='Project Name' onChange={this.handleChange} />
          <Input s={12} name='description' label='Short Description' onChange={this.handleChange} />
          </Row>
          <Row>
          <Input s={12} name='numCollab' type='select' label='Number of Collaborators Wanted' defaultValue='2' onChange={this.handleChange} >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </Input>
          </Row>
          <h2 Main Language />
          <Row>
          <Input name='JavaScript' type='checkbox' value='JavaScript' label='JavaScript' onChange={this.handleChange} />
          <Input name='Ruby' type='checkbox' value='Ruby' label='Ruby' onChange={this.handleChange} />
          <Input name='Python' type='checkbox' value='Python' label='Python' onChange={this.handleChange} />
          <Input name='C' type='checkbox' value='C/C#/C++' label='C/C#/C++' onChange={this.handleChange} />
          <Input name='Java' type='checkbox' value='Java' label='Java' onChange={this.handleChange} />
          <Input name='Java' type='checkbox' value='PHP' label='PHP' onChange={this.handleChange} />
          </Row>
          <Row>
            <Button waves='light' style={styles.button} onClick={this.handleSubmit} >Submit</Button>
          </Row>
      </Modal>
    )
  }
}


const styles = {
  button: {
    backgroundColor: '#6ece5a',
    margin: '10px',
    fontFamily: 'Share Tech Mono'
  }
}

export default CreateProject
