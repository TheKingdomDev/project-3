import React from 'react'
import {Modal, Button, Input, Row} from 'react-materialize'

const CreateProject = () => (
  <Modal
    header='Create New Project'
    trigger={<Button style={styles.center}>Create Project</Button>}>
    <Row>
      <Input s={12} label='Project Name' />
      <Input s={12} label='Short Description' />
    </Row>
    <Row>
      <Input s={12} type='select' label='Number of Collaborators Wanted' defaultValue='2'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </Input>
    </Row>
    <h2 Main Language />
    <Row>
      <Input name='group1' type='checkbox' value='JavaScript' label='JavaScript' />
      <Input name='group1' type='checkbox' value='Ruby' label='Ruby' />
      <Input name='group1' type='checkbox' value='Python' label='Python' />
      <Input name='group1' type='checkbox' value='C/C#/C++' label='C/C#/C++' />
      <Input name='group1' type='checkbox' value='Java' label='Java' />
      <Input name='group1' type='checkbox' value='PHP' label='PHP' />
    </Row>
    <Row>
      <Button waves='light' style={styles.button}>Submit</Button>
    </Row>
  </Modal>
)

export default CreateProject

const styles = {
  button: {
    backgroundColor: '#6ece5a',
    margin: '10px',
    fontFamily: 'Share Tech Mono'
  }
}
