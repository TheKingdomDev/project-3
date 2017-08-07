const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')
const dbApplicationt = require('../../../models/Application.js')
const dbUser = require('../../../models/User.js')

const applicationType = require('../applicationType.js')
const userType = require('../../User/userType.js')

module.exports = new GraphQLObjectType({
  name: 'Query',
  description: 'Application-to-project root query',
  fields: () => {
    return {
      projects: {
        type: new GraphQLList(applicationType),
        args: {
          _id: { type: GraphQLString },
          message: { type: GraphQLString },
          owner: { type: GraphQLString },
          status: { type: GraphQLString }
        },
        resolve(root, args) {
          //  TODO - Implement .select method to limit data retuned from db.
          // TODO: limit use of .populate to only calls where
          return dbProject
            .find(args)
            .populate('owner')
            .exec()
        }
      }
    }
  }
})
