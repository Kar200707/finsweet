import router from "./routers/categoryRouter";

const express = require('express');
const app = express();
const runServer = require('../src/server/server');
const connectDB = require('../src/DB/dbConnection');

connectDB().then((param):void =>{
    param ? runServer(app) : console.log('server stoped');
})

app.use(express.json());
app.use('/api', router);

module.exports = app;