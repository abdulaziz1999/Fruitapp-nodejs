const express = require('express')
const app = express()
const router = require('./src/routes/api')
require('dotenv').config()
const { APP_PORT } = process.env

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)

app.listen(APP_PORT,()=>{
 console.log("starting... port : 9000");
});