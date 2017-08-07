import {
  ApolloClient,
  gql,
  // graphql,
  /* ApolloProvider, */ createNetworkInterface
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
const isAuthenticated = async function () {
  const res = await API.query({
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
const getMyInfo  = async (objOpts) =>  {
  return await API.query({
    query: gql`{
      me {
        _id
        displayName
        email
        profilePictureURL
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

//  Function which takes in a User's Settings Object (stored in state on client-side) and returns thee correct info to Populate the User Profile. 
const getFullProfileInfo = async (objUserSettings) => {
  return await API.query({
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

const projectCreate = async ({name, description}) => {
  return await API.mutate({
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
  projectCreate
}
