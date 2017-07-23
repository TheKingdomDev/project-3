const path = require('path')
const express = require('express')
const graphHTTP = require('express-graphql')
const mongoose = require('mongoose')
mongoose.Promise = Promise

const Schema = require('./graphql-schema/schema.js')
console.log(Schema._queryType)

const pageRouter = require('./routes/page-router.js')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.use('/graphql', graphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}))

app.use('/', pageRouter)

mongoose.connect("mongodb://localhost/project3")

const db = mongoose.connection

db.on("error", function(error) {
  console.log("Mongoose Error: ", error)
})

db.once("open", function() {
  console.log("Mongoose connection successful.")
})


app.listen(PORT, function() {
  console.log("App running on port 3000!");
});
