const {GraphQLObjectType, GraphQLNonNull ,GraphQLString, GraphQLList} = require('graphql')

const UserType = require('../User/userType.js')

module.exports = new GraphQLObjectType({
  name: 'Comment',
  description: 'Comment',
  fields: function () {
    return {
      text: {
        type: GraphQLString,
        resolve(comment) {
          return (
            comment.edit[comment.edit.length - 1].text
          )
        }
      },
      edits: {
        type: new GraphQLList(GraphQLObjectType),
        resolve(comment) {
          return comment.edits
        }
      },
      createdDate: {
        type: GraphQLString,
        resolve(comment) {
          return comment.createdDate
        }
      },
      owner: {
        type: UserType,
        resolve (comment) {
          return comment.owner
        }
      }
    }
  }
})
