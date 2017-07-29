const passport = require('passport')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt')
const dbUser = require('../models/User.js')
const express = require('express')
const router = express.Router()

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

const authenticateToken = expressJwt({secret : process.env.JWT_SECRET})

router.post('/local/login', 
  passport.authenticate( 'local', { session: false}),
  serialize,
  generateToken,
  (req, res) => {  
    res.status(200).json({
      user: req.user,
      token: req.token
    })
  } 
)

router.get('/github/login',
  passport.authenticate('github', { scope: ['user:email'] })
)

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function (req, res) {
    res.redirect('/');
  })

//  NOT 
router.get('/stuff', authenticateToken,(req, res) => {
  console.log(req.user)
  res.json('your token was authenticated successfully.')
})

module.exports = router