const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLList } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'treehouseAPIResponse',
  description: 'User Profile informtion returned from Treehouse API',
  fields () {
    return {
      name: {
        type: GraphQLString,
        resolve ({ name }) { return name}
      },
      profileURL: {
        type: GraphQLString,
        resolve({ profile_url }) { return profile_url }
      },
      profileImageURL : {
        type: GraphQLString,
        resolve({ gravatar_url }) { return gravatar_url }
      },
      badges:{
        type: new GraphQLList(
          new GraphQLObjectType({
            name: 'treehouseBadge',
            fields () {
              return {
                name: {
                  type: GraphQLString,
                  resolve({ name }) { return name }
                },
                URL: {
                  type: GraphQLString,
                  resolve({ url }) { return url }
                },
                iconImageURL: {
                  type: GraphQLString,
                  resolve({ icon_url }) { return icon_url }
                },
                completedDate: {
                  type: GraphQLString,
                  resolve({ earned_date }) { return earned_date }
                },
              }
            }
          })
        ),
        resolve({ badges }) { return badges }
      },
      points: {
        type: new GraphQLObjectType({
            name: 'treehousePointsObject',
            fields () {
              return {
                total: {
                  type: GraphQLInt,
                  resolve({ total }) { return total }
                },
                HTML: {
                  type: GraphQLInt,
                  resolve({ HTML }) { return HTML }
                },
                CSS: {
                  type: GraphQLInt,
                  resolve({ CSS }) { return CSS }
                },
                Javascript: {
                  type: GraphQLInt,
                  resolve({ JavaScript }) { return JavaScript }
                },
                Ruby: {
                  type: GraphQLInt,
                  resolve({ Ruby }) { return Ruby }
                },
                PHP: {
                  type: GraphQLInt,
                  resolve({ PHP }) { return PHP }
                },
                WordPress: {
                  type: GraphQLInt,
                  resolve({ WordPress }) { return WordPress }
                },
                iOS: {
                  type: GraphQLInt,
                  resolve({ iOS }) { return iOS }
                },
                Android: {
                  type: GraphQLInt,
                  resolve({ Android }) { return Android }
                },
                DevelopmentTools: {
                  type: GraphQLInt,
                  resolve(points) { 
                    return points['Development Tools'] }
                },
                Business: {
                  type: GraphQLInt,
                  resolve({ Business }) { return Business}
                },   
                Python: {
                  type: GraphQLInt,
                  resolve({ Python }) { return Python }
                },
                Java: {
                  type: GraphQLInt,
                  resolve({ Java }) { return Java }
                },
                DigitalLiteracy: {
                  type: GraphQLInt,
                  resolve(points) { return points['Digital Literacy']}
                },
                GameDevelopment: {
                  type: GraphQLInt,
                  resolve(points) { return points['Game Development'] }
                },
                cSharp: {
                  type: GraphQLInt,
                  resolve(points) { return points['C#'] }
                },
                Databases: {
                  type: GraphQLInt,
                  resolve({ Databases }) { return Databases }
                },
                APIs: {
                  type: GraphQLInt,
                  resolve({ APIs }) { return APIs }
                },
                Security: {
                  type: GraphQLInt,
                  resolve({ Security }) { return Security }
                },
                Go: {
                  type: GraphQLInt,
                  resolve({ Go }) { return Go }
                }      
              }
            }
          }),
        resolve({ points }) { return points }
      }
    }
  }
})