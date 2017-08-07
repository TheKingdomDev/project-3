const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')

//Importing dbModels 
const dbApplication = require('../../../models/Application.js')

//  Importing GraphQL types for querying
const applicationType = require('../applicationType.js')

module.exports = {
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
    return dbApplication
      .find(args)
      .populate('owner')
      .exec()
  }
}
    
  
