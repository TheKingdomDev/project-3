/* =============================================================================
                            --- server.js ---
                THIS IS THE ENTRY POINT FOR OUR APPLICATON.
                ALL CLIENT-SIDE REQUESTS ARRIVE HERE AND ARE
                    RE-ROUTED AND HANDLED ACCORDINGLY

                    Contributers to this project include:
                          Back-end Development
                            - David Lassiter
                            - Tim Anderson

                          Front-end Development
                            - Eric King
                            - Juan Carlos Gonzalez

                    For more information on this project please
                      refer to package.json or README.md.
                    You can also visit our GitHub repository at:
                      https://github.com/lassiterda/project-3

                *Please bear in mind that this is a work in progress.*
                        Comment made on: July 23rd, 2017
 =============================================================================== */

//Bringing in our dependencies
const path = require('path')
const express = require('express')
const graphHTTP = require('express-graphql')
const mongoose = require('mongoose')

//We do this to be able to use Promises with mongoose
mongoose.Promise = Promise

//Bringing in our GraphQL Schema
const Schema = require('./graphql-schema/schema.js')
console.log(Schema._queryType)

//Bringing in the module that serves our site
const pageRouter = require('./routes/page-router.js')

//Declaring an instance of Express
const app = express()

//Setting our port # to the environment variable PORT or to 3000
const PORT = process.env.PORT || 3000

//Setting up connection to MongoDB
mongoose.connect("mongodb://localhost/project3")
const db = mongoose.connection

//Setting up ./public as a static directory to facilitate access to public assets
app.use(express.static(path.join(__dirname, 'public')))

//Telling express to mount our GraphQL API to the 'graphql' route
app.use('/graphql', graphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}))

//Basically telling Express: "whenever a request is made to '/' endpoint,
//hand it over to pageRouter module so it can handle it accordingly"
app.use('/', pageRouter)


//Telling our server to listen for activity on Port 3000
app.listen(PORT, function() {
  //Notify the console that server is running on given PORT
  console.log("App running on port 3000!");
  //If there's an error connecting to the database, display
  //error on console
  db.on("error", function (error) {
    console.log("Mongoose Error: ", error)
  })
  //If connection to Mongo is successful, notify console
  db.once("open", function() {
    console.log("Mongoose connection successful.")
  })
});
