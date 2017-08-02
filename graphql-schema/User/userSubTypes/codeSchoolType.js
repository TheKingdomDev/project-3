const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLList } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'CodeSchoolAPIResponse',
  description: 'user Profile information pulled from CodeSchool',
  fields () {
    return {
      username: {
        type: GraphQLString,
        resolve ({ username }) {
          return username
        }
      },
      total_score: {
        type: GraphQLInt,
        resolve ({ total_score }) {
          return total_score
        }
      },
      avatarURL: {
        type: GraphQLString,
        resolve ({ avatar }) {
          return avatar
        }
      },
      courses: {
        type: new GraphQLList(
          new GraphQLObjectType({
            name: 'CodeSchoolCourse',
            fields() {
              return {
                title: {
                  type: GraphQLString,
                  resolve ({ title }) { return title}
                },
                url: {
                  type: GraphQLString,
                  resolve({ url }) { return url }
                },
                badgeImageURL: {
                  type: GraphQLString,
                  resolve({ badge }) { return badge }
                }
              }
            }
          })
        ),
        resolve ({ courses }) { return courses }
      },
      badges: {
        type: new GraphQLList(
          new GraphQLObjectType({
            name: 'CodeSchoolBadge',
            fields() {
              return {
                name: {
                  type: GraphQLString,
                  resolve({ name }) { return name }
                },
                badgeImageURL: {
                  type: GraphQLString,
                  resolve({ badge }) { return badge }
                },
                courseURL: {
                  type: GraphQLString,
                  resolve({ course_url }) { return course_url }
                }
              }
            }
          })
        ),
        resolve({ badges }) {
          return badges
        }
      }
    }
  }

})