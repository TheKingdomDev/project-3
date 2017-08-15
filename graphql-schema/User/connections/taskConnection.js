const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLInt } = require('graphql')


module.exports = new GraphQLObjectType({
  name: 'taskConnection',
  description: 'Connection between User and all Tasks assigned to them.  Returns edge data and a list of Current Tasks',
  fields: () => ({
    
  })
})