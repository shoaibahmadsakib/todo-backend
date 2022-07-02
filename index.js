const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
require('dotenv').config()
const cors = require("cors");
const ObjectId = require('mongodb').ObjectId
const Connection=  require("./Database/db") 
const Routes = require("./Server/Router")
const bodyParser =require("body-parser")

app.use(cors());
app.use(express.json());
app.use('/',Routes)
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
Connection();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


