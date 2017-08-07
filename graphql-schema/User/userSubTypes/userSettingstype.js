const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'UserSettingsObject',
  description: 'Collection of User settings and data for integrations.',
  fields () {
    return {
      codeWarsUsername: {
        type: GraphQLString,
        resolve({ codeWarsUsername }) {
          return codeWarsUsername
        }
      },
      codeSchoolUsername: {
        type: GraphQLString,
        resolve({ codeSchoolUsername }) {
          return codeSchoolUsername
        }
      },
      treehouseUsername: {
        type: GraphQLString,
        resolve({ treehouseUsername }) {
          return treehouseUsername
        }
      },
      useLocalBio: {
        type: GraphQLBoolean,
        resolve({ useLocalBio }) {
          return useLocalBio
        }
      },
      showCodewars: {
        type: GraphQLBoolean,
        resolve({ showCodewars }) {
          return showCodewars
        }
      },
      showcCodeSchool: {
        type: GraphQLBoolean,
        resolve({ showcCodeSchool }) {
          return showcCodeSchool
        }
      },
      showTreehouse: {
        type: GraphQLBoolean,
        resolve({ showTreehouse }) {
          return showTreehouse
        }      
      }
    }
  }
})
