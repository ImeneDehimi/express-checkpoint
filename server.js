const express = require('express')
const app = express()
require('dotenv').config()
const {engine} = require('express-handlebars');
app.set('view engine', 'hbs')
const routes = require('./routes/routes')

app.engine('.hbs' , engine({
    extname:'.hbs',
    defaultLayout: false, 
    layoutsDir: 'views'
}))
app.use(express.static('public'))

app.use('/',routes)

const PORT = process.env.PORT
app.listen(PORT || 3000)
console.log("server is running");