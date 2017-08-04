const passport = require('passport')
const express = require('express')
const router = express.Router()

router.get('/github/login',
  passport.authenticate('github', { scope: ['user:email']})
)

//  TODO - send failure flash messages with the response if 'failureRedirect' is envoked 
router.get('/github/callback',
  passport.authenticate('github', {failureredirect: '/'}),
  (req, res) => { res.redirect('/#/home') }
)

//  TESTING ROUTE, DELETE before FDEPLOYMENT to production.
router.get('/stuff',(req, res) => {
  console.log(req.user)
  res.json(req.user)
})

module.exports = router