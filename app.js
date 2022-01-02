const express = require('express')
const app = express()
const router = require('./src/routes/api')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)

app.listen(9000,()=>{
 console.log("starting... port : 9000");
});