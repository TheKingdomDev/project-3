import {
  ApolloClient,
  gql,
  createNetworkInterface
} from 'react-apollo'

const API = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: '/graphql',
    opts: {
      credentials: 'same-origin'
    }
  })
})

//  Function to check user Authentication, returns Promise which will resolve to a Boolean depending on login.
const isAuthenticated = function () {
  const res = API.query({
    query: gql`{
      me {
        _id
      }
    }`
  })

  return res.data.me
    ? true
    : false
}

//  Function which fetches basic user information, as well as the UserSettings Object for rendering pages/fetching data
const getMyInfo = (objOpts) => {
  return API.query({
    query: gql`{
      me {
        _id
        displayName
        email
        profilePictureURL
        githubBio
        userSettings {
          useLocalBio
          showCodewars
          showcCodeSchool
          showTreehouse
        }
      }
    }`
  })
}

const getProjectInfo = async (objObts) => {
  return await API.query({
    query: gql`{
      me {
        _id
        projectsConnection {
        connectionInfo {
          totalProjects
        }
        projects {
          _id
          name
          description
          createdDate
        }
      }
    }
  }`
  })
}

//  Function which takes in a User's Settings Object
// (stored in state on client-side) and returns thee correct info
// to Populate the User Profile.
const getFullProfileInfo = (objUserSettings) => {
  return API.query({
    query: gql`{
      me {
        
        ${useLocalBio ? 'localBio' : 'githubBio'}
        UserSettings{
          ${showCodewars ? 'codeWarsUsername' : ''}
          ${showcCodeSchool ? 'codeSchoolUsername' : ''}   
          ${showTreehouse ? 'treehouseUsername' : ''}   
        } 
      }
    }`
  })
}

// Get all projects function

const GetAllProjects = (objProject) => {
  return API.query({
    query: gql`projects {
        _id
        name
        description
        createdDate
      }`
  })
}

// Get all users function

const GetAllUsers = (objUser) => {
  return API.query({
    query: gql`users{
        _id
        displayName
        email
        profilePictureURL
      }`
  })
}

const projectCreate = ({name, description}) => {
  return API.mutate({
    mutation: gql`mutation projectCreate($data: projectInput!) {
      projectCreate (data: $data) {
        _id
        name
        description
      }
    }`,
    variables: {
      data: {
        name,
        description
      }
    }
  })
}

module.exports = {
  API,
  isAuthenticated,
  getMyInfo,
  getFullProfileInfo,
  projectCreate,
  getProjectInfo,
  GetAllProjects,
  GetAllUsers
}
