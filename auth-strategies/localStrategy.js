
//  NOTE:  Currently Not in use, will pottentially be added for Future Development Project. 
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

const dbUser = require('../models/User.js')

module.exports = function(passport) {

  passport.use(new LocalStrategy(
    (username, password, done) => {

      dbUser.findOne({ email: username })
      .then((dbUser) => {
        return !dbUser
          //  if User was not returned
          ? done(null, false, {message: "Incorrect Username"})
          : bcrypt.compare(password, dbUser.password)
          .then((isMatch) => {
            return isMatch 
              ? done(null, dbUser)
              : done(null, false, {message: "Incorrect Password"})
          })
      })
      .catch((err) => { done(err) })
    })
  )
}
