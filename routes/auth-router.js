const passport = require('passport')
const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()

const serialize = (req, res, next) => {
  //  todo make sure that 
  User.findOneOrCreate(req.user)
    .then(dbUser => { 
      req.user = { id: dbUser._id }
      next()
    })
    .catch(err => { next(err) })
}

const generateToken = (req, res, next) => {  
  req.token = jwt.sign(
    { id: req.user.id, }, 
    process.env.JWT_SECRET, 
    { expiresInMinutes: 120 })
  next()
}

router.post('/local/login', passport.authenticate(
  'local', { session: false}),
  serialize,
  generateToken,
  (req, res) => {  
    res.status(200).json({
      user: req.user,
      token: req.token
    })
  } 
)

router.post('/logout', (req, res) => {
  //  stuff  
})

module.exports = router