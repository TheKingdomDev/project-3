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


module.exports = router