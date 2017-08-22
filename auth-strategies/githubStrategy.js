const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy

const dbUser = require('../models/User')

module.exports = function(passport) {

  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  function(accessToken, _, profile, done) {
    dbUser.findOneAndUpdate(
      { githubId: profile.id },
    {
      email: profile._json.email,
      displayName: profile.displayName,
      githubLogin: profile.username,
      githubId: profile.id,
      profilePictureURL: profile._json.avatar_url,
      githubProfileURL: profile.profileUrl,
      githubBio: profile._json.bio,
      githubStats: {
        hireable: profile._json.hireable,
        reops: profile._json.public_repos,
        followers: profile._json.followers,
        following: profile._json.following,
        accountCreated: profile._json.created_at,
        location: profile._json.location
      }
    }, {
      new: true,
      upsert: true
    })
    .then(user => {
      user.accessToken = accessToken
      console.log(user.accessToken)
       return done(_, user)
    })
    .catch(err => {
      return done(err)
    })
  }
))

}
