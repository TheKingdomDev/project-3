const { GraphQLObjectType, GraphQLString } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'ProjectTech',
  description: 'Language or Technology included in a Project.',
  fields: () => (
    {
      name: {
        type: GraphQLString,
        resolve: ({name}) => ( name )
      },
      iconClassName: {
        type: GraphQLString,
        resolve: ({ iconClassName }) => (iconClassName)
      },
      stack: {
        type: GraphQLString,
        resolve: ({ stack }) => (stack)

      }
    }
  )
})