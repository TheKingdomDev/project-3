import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'

import { projectCreate } from '../../utils/apolloHelpers'

class NewCreateProject extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      name: '',
      description: '',
      primaryLang: '',
      frontEnd: '',
      backEnd: '',
      githubRepo: ''

    }
  }

  handleFormToggle = () => ( this.setState({open: !this.state.open}) )

  handleInputChange = (e) => ( this.setState({ [e.target.id]: e.target.value }) )

  handleSubmit = (e) => {
    e.preventDefault()
    projectCreate({name: this.state.name, description: this.state.description })
    .then(res => {
      console.log(res)
      this.props.addNewProject(res.data.projectCreate)
    })
    this.handleFormToggle()
  }

  render () {
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onClick={this.handleFormToggle}
      />,
      <FlatButton
        label='Submit'
        primary={true}
        type={'submit'}
        onClick={this.handleSubmit}
      />
    ]
    return (
      <div>
        {/* Need to center button with w3c */ }
        <RaisedButton label='Create Project' primary={true} onClick={this.handleFormToggle} />
        <Dialog style={styles.dialogbody}
          title='Create A New Project'
          actions={actions}
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true}
        >
          <form onSubmit={this.handleSubmit}>
            <TextField
              id='name'
              floatingLabelText='Project Name'
              type='text'
              fullWidth={true}
              onChange={this.handleInputChange} />
            {/* <br /> */}
            <TextField
              id='description'
              floatingLabelText='Project Description'
              type='text'
              fullWidth={true}
              onChange={this.handleInputChange} />
              {/* <br /> */}
              <SelectField id='mainTech' style={styles.selectField} value={this.state.value} floatingLabelText='Primary Languages' floatingLabelFixed={true} fullWidth={true} onChange={this.handleInputChange}>
              <MenuItem key={1} value={'JavaScript'} primaryText='JavaScript' />
              <MenuItem key={2} value={'Ruby'} primaryText='Ruby' />
              <MenuItem key={3} value={'Python'} primaryText='Python' />
              <MenuItem key={4} value={'C#/C++'} primaryText='C#/C++' />
              <MenuItem key={5} value={'HTML/CSS'}primaryText='HTML/CSS' />
            </SelectField>
            <br />
            <SelectField id='frontEnd' style={styles.selectField} value={this.state.value} floatingLabelText='Front End Technologies' floatingLabelFixed={true} fullWidth={true} onChange={this.handleInputChange}>
              <MenuItem key={1} value={'React'} primaryText='React' />
              <MenuItem key={2} value={'jQuery'} primaryText='jQuery' />
              <MenuItem key={3} value={'Angular'} primaryText='Angular' />
              <MenuItem key={4} value={'Vue'}primaryText='Vue' />
              <MenuItem key={5} value={'SASS/LESS'} primaryText='SASS/LESS' />
            </SelectField>
            <br />
            <SelectField id='backEnd' style={styles.selectField} value={this.state.value} floatingLabelText='Back End Technologies' floatingLabelFixed={true} fullWidth={true} onChange={this.handleInputChange}>
              <MenuItem key={1} value={'Node'} primaryText='Node' />
              <MenuItem key={2} value={'Java'} primaryText='Java' />
              <MenuItem key={3} value={'SQL'} primaryText='SQL' />
              <MenuItem key={4} value={'MongoDB'}primaryText='MongoDB' />
              <MenuItem key={5} value={'PHP'} primaryText='PHP' />
            </SelectField>
            <SelectField id='gitHub' style={styles.selectField} value={this.state.value} floatingLabelText='GitHub Repository' floatingLabelFixed={true} fullWidth={true} onChange={this.handleInputChange}>
              <MenuItem key={1} value={'My Repo'} primaryText='My Repo' />
              {/* Populate these menu items with user repos */ }
            </SelectField>
            <br />
          </form>
        </Dialog>
      </div>
    )
  }
}

const styles = {
  dialogbody: {
    textAlign: 'center'
  },
  selectField: {
    textAlign: 'left'
  }
}
export default NewCreateProject
