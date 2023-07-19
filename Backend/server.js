const express=require('express')
const bodyParser = require('body-parser');
const serverConfig=require('./configs/server.config')

//intialize express

const app= express();

/**
 * Using the bodyParser middleware
 * 
 * Used for parsing the request
 * Parsing the request of the type json and convert that to object
 * 
 */

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

/**
 * Initialising the database
*/
const db = require("./models");
const Role = db.role;

require('./routes/auth.routes')(app)

app.listen(serverConfig.PORT,()=>{
    console.log(`listening on port :${serverConfig.PORT}`)
})
