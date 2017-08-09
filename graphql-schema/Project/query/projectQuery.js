const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = require('graphql')
const dbProject = require('../../../models/Project')
const dbComment = require('../../../models/Comment')
const dbUser = require('../../../models/User')

const projectType = require('../projectType')

module.exports = {
  type: new GraphQLList(projectType),
  args: {
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    owner: { type: GraphQLString },
    collaborators: { type: GraphQLString },
    primaryTechs: { type: new GraphQLList(GraphQLString) },
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt}
  },
  resolve(root, { _id, name, owner, collaborators, primaryTechs, limit, offset }, req, ast) {
    let query = {}
    if (_id) { query._id = _id }
    if (owner) { query.owner = owner }
    if (name) { query.name = { $regex: name, $options: 'i' } }
    if (primaryTechs) { 
      query.primaryTechs = { $in: [ 
        primaryTechs.map(tech => { return new RegExp(tech, 'i')})
      ] } 
    }
    if (collaborators) {
      query.collaborators = {
        $in: [
          collaborators.map(user => { return new RegExp(user, 'i') })
        ] }
    }

    return dbProject
      .find(query)
      .limit(limit)
      .skip(offset)
      .populate('owner')
      .populate('collaborators')
      .populate('comments')
      .populate('tasks')
      .exec()
    }
  }

