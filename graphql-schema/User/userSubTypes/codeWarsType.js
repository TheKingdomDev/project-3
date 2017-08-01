const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLList } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'CodeWarsAPIResponse',
  description: 'user Profile information pulled from CodeWars.',
  fields () {
    return {
      username: {
        type: GraphQLString,
        resolve({ username }) {
          return username
        }
      },
      leaderboardPosition: {
        type: GraphQLString,
        resolve({ leaderboardPosition }) {
          return leaderboardPosition
        }
      },
      skills: {
        type: new GraphQLList(GraphQLString),
        resolve({ skills }) {
          return skills
        }
      },
      overallRank: {
        type: GraphQLInt,
        resolve({ ranks }) {
          return ranks.overall.rank
        }
      },
      codeChallenges: {
        type: new GraphQLObjectType({
          name: 'CodeChallenges',
          fields() {
            return {
              totalAuthored: {
                type: GraphQLInt,
                resolve({ totalAuthored }) {
                  return totalAuthored
                }
              },
              totalCompleted: {
                type: GraphQLInt,
                resolve({ totalCompleted }) {
                  return totalCompleted
                }
              }
            }
          }
        }),
        resolve ({ codeChallenges }) {
          return codeChallenges
        }
      }
    }
  }
})
