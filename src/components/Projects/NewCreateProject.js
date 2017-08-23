import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'

class NewCreateProject extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      name: '',
      description: '',
      mainLanguage: '',
      frontEnd: '',
      backEnd: '',
      githubRepo: ''

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleOpen () {
    this.setState({open: true})
  }

  handleClose () {
    this.setState({open: false})
  }

  handleTextChange (e) {
    // const name = e.target.name
    // const description = e.target.value
    // const mainTech = event.target.mainLanguage
    // const frontEnd = event.target.frontEnd
    // const backEnd = event.target.backEnd
    // const githubRepo = event.target.githubRepo
    // const value = e.target.value

    // this.setState((prevState) => {
    //   return {form: Object.assign(prevState.form, {[name]: value})}
    // })
    this.setState({name: e.target.value, description: e.target.value})
  }
  // handleChange = (event, index, value) => this.setState({name: value})
  handleSelectChange (event, index, value) {
    // this.setState({
    //   mainLanguage: event.target.value,
    //   frontEnd: event.target.value,
    //   backEnd: event.target.value,
    //   githubRepo: event.target.value
    // })
    this.setState({frontEnd: value,
      backEnd: value,
      mainLanguage: value,
      githubRepo: value})
  }
  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state.name)
    console.log(this.state.description)
    this.handleClose()
  }

  componentDidUpdate () {
    console.log(this.state)
  }
  render () {
    const actions = [
      <FlatButton
        label='Cancel'
        primary={true}
        onClick={this.handleClose}
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
        <RaisedButton label='Create Project' primary={true} onClick={this.handleOpen} />
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
              value={this.state.value}
              onChange={this.handleTextChange} />
            <br />
            <TextField
              id='description'
              floatingLabelText='Project Description'
              type='text'
              fullWidth={true}
              value={this.state.value}
              onChange={this.handleTextChange} />
              <br />
            <SelectField id='mainTech' style={styles.selectField} value={this.state.value} floatingLabelText='Main Tech Language' floatingLabelFixed={true} fullWidth={true} onChange={this.handleSelectChange}>
              <MenuItem key={1} value={'JavaScript'} primaryText='JavaScript' />
              <MenuItem key={2} value={'Ruby'} primaryText='Ruby' />
              <MenuItem key={3} value={'Python'} primaryText='Python' />
              <MenuItem key={4} value={'C#/C++'} primaryText='C#/C++' />
              <MenuItem key={5} value={'HTML/CSS'}primaryText='HTML/CSS' />
            </SelectField>
            <br />
            <SelectField id='frontEnd' style={styles.selectField} value={this.state.value} floatingLabelText='Front-End Tech' floatingLabelFixed={true} fullWidth={true} onChange={this.handleSelectChange}>
              <MenuItem key={1} value={'React'} primaryText='React' />
              <MenuItem key={2} value={'jQuery'} primaryText='jQuery' />
              <MenuItem key={3} value={'Angular'} primaryText='Angular' />
              <MenuItem key={4} value={'Vue'}primaryText='Vue' />
              <MenuItem key={5} value={'SASS/LESS'} primaryText='SASS/LESS' />
            </SelectField>
            <br />
            <SelectField id='backEnd' style={styles.selectField} value={this.state.value} floatingLabelText='Back-End Tech' floatingLabelFixed={true}  fullWidth={true} onChange={this.handleSelectChange}>
              <MenuItem key={1} value={'Node'} primaryText='Node' />
              <MenuItem key={2} value={'Java'} primaryText='Java' />
              <MenuItem key={3} value={'SQL'} primaryText='SQL' />
              <MenuItem key={4} value={'MongoDB'}primaryText='MongoDB' />
              <MenuItem key={5} value={'PHP'} primaryText='PHP' />
            </SelectField>
            <SelectField id='gitHub' style={styles.selectField} value={this.state.value}floatingLabelText='GitHub Repository' floatingLabelFixed={true} fullWidth={true} onChange={this.handleSelectChange}>
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
