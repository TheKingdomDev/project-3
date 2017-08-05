const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLBoolean, GraphQLList } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'userSettingsObject',
  description: 'user Profile information pulled from CodeSchool',
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
      },
      treehouseUsername: {
        type: GraphQLString,
        resolve({ treehouseUsername }) {
          return treehouseUsername
      },
      showCodewars: {
        type: GraphQLBoolean,
        resolve({ showCodewars }) {
          return showCodewars
      },
        showCodeSchool: {
        type: GraphQLBoolean,
        resolve({ showCodeSchool }) {
          return showCodeSchool
      },
        showTreehouse: {
        type: GraphQLBoolean,
        resolve({ showTreehouse }) {
          return showTreehouse
      },
    }
  }
})