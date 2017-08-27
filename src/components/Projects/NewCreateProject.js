import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import AutoComplete from 'material-ui/AutoComplete'
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
      value: 1,
      primaryLang: null,
      backEnd: [],
      frontEnd: [],
      githubRepo: ''
    },
    this.langs = {
      primary: [
        {
          name: 'Java',
          iconClassName: 'devicons devicons-java',
          stack: 'primary'
        },
        {
          name: 'Ruby',
          iconClassName: 'devicons devicons-ruby',
          stack: 'primary'
        },
        {
          name: 'Scala',
          iconClassName: 'devicons devicons-scala',
          stack: 'primary'
        },
        {
          name: 'Python',
          iconClassName: 'devicons devicons-python',
          stack: 'primary'
        },
        {
          name: 'Go',
          iconClassName: 'devicons devicons-go',
          stack: 'primary'
        },
        {
          name: 'PHP',
          iconClassName: 'devicons devicons-php',
          stack: 'primary'
        },
        {
          name: 'JavaScript',
          iconClassName: 'devicons devicons-javascript',
          stack: 'primary'
        },
        {
          name: 'CSS3',
          iconClassName: 'devicons devicons-css3',
          stack: 'primary'
        },
        {
          name: 'HTML5',
          iconClassName: 'devicons devicons-html5',
          stack: 'primary'
        },
        {
          name: 'Swift',
          iconClassName: 'devicons devicons-swift',
          stack: 'primary'
        },
      ],
      backEnd: [
        {
        name: 'Ruby On Rails',
        iconClassName: 'devicons devicons-ruby_on_rails',
        stack: 'backEnd'
        },
        {
          name: 'Django',
          iconClassName: 'devicons devicons-django',
          stack: 'backEnd'
        },
        {
          name: 'Symfony',
          iconClassName: 'devicons devicons-symfony_badge',
          stack: 'backEnd'
        },
        {
          name: 'MySQL',
          iconClassName: 'devicons devicons-mysql',
          stack: 'backEnd'
        },
        {
          name: 'Laravel',
          iconClassName: 'devicons devicons-laravel',
          stack: 'backEnd'
        },
        {
          name: 'Drupal',
          iconClassName: 'devicons devicons-drupal',
          stack: 'backEnd'
        },
        {
          name: 'WordPress',
          iconClassName: 'devicons devicons-wordpress',
          stack: 'backEnd'
        },
        {
          name: 'Node.js',
          iconClassName: 'devicons devicons-nodejs_small',
          stack: 'frontEnd'
        },
        {
          name: 'PostgreSQL',
          iconClassName: 'devicons devicons-postgresql',
          stack: 'backEnd'
        },
        {
          name: '.NET Framework',
          iconClassName: 'devicons devicons-dotnet',
          stack: 'backEnd'
        },
        {
          name: 'Microsoft SQL Server',
          iconClassName: 'devicons devicons-msql_server',
          stack: 'backEnd'
        },
        {
          name: 'MongoDB',
          iconClassName: 'devicons devicons-mongodb',
          stack: 'backEnd'
        },
        {
          name: 'Redis',
          iconClassName: 'devicons devicons-redis',
          stack: 'backEnd'
        },
      ],
      frontEnd: [
        {
          name: 'AngularJS',
          iconClassName: 'devicons devicons-angular',
          stack: 'frontEnd'
        },
        {
          name: 'Backbone.js',
          iconClassName: 'devicons devicons-backbone',
          stack: 'frontEnd'
        },
        {
          name: 'Raphaël.js',
          iconClassName: 'devicons devicons-raphael',
          stack: 'frontEnd'
        },
        {
          name: 'jQuery',
          iconClassName: 'devicons devicons-jquery',
          stack: 'frontEnd'
        },
        {
          name: 'Ember.JS',
          iconClassName: 'devicons devicons-ember',
          stack: 'frontEnd'
        },
        {
          name: 'Dojo Toolkit',
          iconClassName: 'devicons devicons-dojo',
          stack: 'frontEnd'
        },
        {
          name: 'Jekyll',
          iconClassName: 'devicons devicons-jekyll_small',
          stack: 'frontEnd'
        },
        {
          name: 'Bootstrap',
          iconClassName: 'devicons devicons-bootstrap',
          stack: 'frontEnd'
        },
        {
          name: 'Dojo Toolkit',
          iconClassName: 'devicons devicons-dojo',
          stack: 'frontEnd'
        },
        {
          name: 'React.js',
          iconClassName: 'devicons devicons-react',
          stack: 'frontEnd'
        },
      ]
    }
  }

  handleFormToggle = () => ( this.setState({open: !this.state.open}) )

  handleInputChange = (e) => {
    console.log('yes') 
    console.log(e.target)
    this.setState({ [e.target.id]: e.target.value }) 
  }

  handleSubmit = (e) => {
    e.preventDefault()
//   Creaate the Project on the Backend
    projectCreate({name: this.state.name, description: this.state.description })
//  pass the resulting new project up to the parent to that it can be added to the list
    .then(res => { this.props.addNewProject(res.data.projectCreate)})
//  close the form
    this.handleFormToggle()
  }

  componentDidUpdate() {
    console.log(this.state)
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
              onChange={this.handleInputChange} 
            />
            {/* <br /> */}
            <TextField
              id='description'
              floatingLabelText='Project Description'
              type='text'
              fullWidth={true}
              onChange={this.handleInputChange} 
            />

            <AutoComplete
              floatingLabelText="Primary Language"
              fullWidth={true}
              filter={AutoComplete.caseInsensitiveFilter}
              dataSource={this.langs.primary.map(e => (e.name))}
              id='primaryLang'
              onChange={this.handleInputChange}
            />

            <SelectField id='frontEnd' style={styles.selectField} value={this.state.value} floatingLabelText='Front End Technologies' floatingLabelFixed={true} fullWidth={true} onChange={this.handleInputChange}>
              <MenuItem value={'React'} primaryText='React' />
              <MenuItem value={'jQuery'} primaryText='jQuery' />
              <MenuItem value={'Angular'} primaryText='Angular' />
              <MenuItem value={'Vue'}primaryText='Vue' />
              <MenuItem value={'SASS/LESS'} primaryText='SASS/LESS' />
            </SelectField>
            <br />
            <SelectField id='backEnd' style={styles.selectField} value={this.state.value} floatingLabelText='Back End Technologies' floatingLabelFixed={true} fullWidth={true} onChange={this.handleInputChange}>
              <MenuItem value={'Node'} primaryText='Node' />
              <MenuItem value={'Java'} primaryText='Java' />
              <MenuItem value={'SQL'} primaryText='SQL' />
              <MenuItem value={'MongoDB'}primaryText='MongoDB' />
              <MenuItem value={'PHP'} primaryText='PHP' />
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
