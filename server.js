const express = require('express')
const path= require('path')

const app= express();

//post request from user
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname,'public')))
app.use('/api', require('./routes/api').route)

app.listen(2678, () => console.log('server started at http://localhost:2678'))