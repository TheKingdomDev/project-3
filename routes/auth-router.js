const passport = require('passport')
const express = require('express')
const router = express.Router()

const {serialize, generateToken, authenticateToken } = require('../auth-strategies/authHelpers')

router.get('/github/login',
  passport.authenticate('github', { scope: ['user:email'], session: false })
)

//  TODO - generate JWT and redirect to main page with authentication with authentication
//  TODO - send failure flash messages with the response if 'failureRedirect' is envoked 
router.get('/github/callback',
  passport.authenticate('github', {failureredirect: '/landing', session: false}),
  serialize,
  generateToken,
  (req, res) => {
    res.status(200).json({
      token: req.token
    })
  }
)

//  TESTING ROUTE, DELETE before FDEPLOYMENT to production.
router.get('/stuff', authenticateToken,(req, res) => {
  console.log(req.user)
  res.json('your token was authenticated successfully.')
})

module.exports = router