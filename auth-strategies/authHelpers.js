const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')

const dbUser = require('../models/User.js')


//  custom Middleware for authentication, locates/creates a user and attaches their id
//  to the req object as req.user
const serialize = (req, res, next) => {
  // call custom static method to find and/or create User, then return that dbUser
  dbUser.findOneOrCreate(req.user)
    .then(dbUser => {
      req.user = { id: dbUser._id }
      next()
    })
    .catch(err => { next(err) })
}

//  custom Middleware which generates a JWT based on the req.user object
const generateToken = (req, res, next) => {
  req.token = jwt.sign(
    { id: req.user.id, },
    process.env.JWT_SECRET,
    { expiresIn: '4h' })
  next()
}

const authenticateToken = expressJwt({ secret: process.env.JWT_SECRET })

module.exports = {
  serialize,
  generateToken,
  authenticateToken
}