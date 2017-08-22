const passport = require('passport')
const express = require('express')
const router = express.Router()

router.get('/github/login',
  passport.authenticate('github', { scope: ['user:email']})
)

//  TODO - send failure flash messages with the response if 'failureRedirect' is envoked
router.get('/github/callback',
  passport.authenticate('github', {failureRedirect: '/'}),
  (req, res) => { res.redirect('/#/home') }
)

router.get("/logout", (req, res) => {
  req.logout()
  res.redirect("/")
})

module.exports = router
