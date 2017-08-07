import React, {Component} from 'react'
import {Modal, Button, Input, Row, Form} from 'react-materialize'

class CreateProject extends Component {

  constructor (props) {
    super(props)
    this.state = {
      form: {
        name: '',
        description: '',
        numCollab: 0,
        primaryTechs: {
          JavaScript: false,
          Ruby: false,
          Python: false,
          C: false,
          Java: false,
          PHP: false
        }
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
  }
  ComponentWillMount () {
    console.log(this.state)
  }
  render () {
    console.log('I live in CreateProject')
    return (
      <Modal
        header='Create New Project'
        trigger={<Button>Create Project</Button>}>
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Input s={12} name='name' value={this.state.value} onChange={this.handleChange} label='Project Name' />
            <Input s={12} name='description' value={this.state.value} onChange={this.handleChange} label='Short Description' />
          </Row>
          <Row>
            <Input s={12} name='numCollab' type='select' value={this.state.value} onChange={this.handleChange} label='Number of Collaborators Wanted' defaultValue='2'>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </Input>
          </Row>
          <Row>
            <Input name='JavaScript' type='checkbox' value='JavaScript' label='JavaScript' />
            <Input name='Ruby' type='checkbox' value='Ruby' label='Ruby' />
            <Input name='Python' type='checkbox' value='Python' label='Python' />
            <Input name='C' type='checkbox' value='C/C#/C++' label='C/C#/C++' />
            <Input name='Java' type='checkbox' value='Java' label='Java' />
            <Input name='PHP' type='checkbox' value='PHP' label='PHP' />
          </Row>
          <Row>
            <Button waves='light' type='submit' style={styles.button}>Submit</Button>
          </Row>
        </Form>
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
