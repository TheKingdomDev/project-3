const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy

const dbUser = require('../models/User')

module.exports = function(passport) {

  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, _, profile, done) {

    dbUser.findOneOrCreate(
      { githubId: profile.id },
    {
      email: profile._json.email,
      displayName: profile.displayName,
      githubLogin: profile.username,
      githubId: profile.id,
      profilePictureURL: profile.avatar_url,
      githubProfileURL: profile.profileUrl
    })
    .then(user => {
       return done(_, user)
    })
    .catch(err => {
      return done(err)
    })
  }
))

}