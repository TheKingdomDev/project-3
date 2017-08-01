const passport = require('passport')
const express = require('express')
const router = express.Router()

router.get('/github/login',
  passport.authenticate('github', { scope: ['user:email']})
)

const checkAuthenticated = function (req, res, next) {
  console.log(req.isAuthenticated())
  if (req.isAuthenticated()) {
    return next();
  }
  else {
    res.redirect('/')
  }
}

//  TODO - send failure flash messages with the response if 'failureRedirect' is envoked 
router.get('/github/callback',
  passport.authenticate('github', {failureredirect: '/'}),
  (req, res) => { res.redirect('/#/home') }
)

//  TESTING ROUTE, DELETE before FDEPLOYMENT to production.
router.get('/stuff', checkAuthenticated,(req, res) => {
  console.log(req.user)
  res.json('your token was authenticated successfully.')
})

module.exports = router