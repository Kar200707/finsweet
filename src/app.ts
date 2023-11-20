import router from "./routers/categoryRouter";

const express = require('express');
const cors = require('cors');
const app = express();
const runServer = require('../src/server/server');
const connectDB = require('../src/DB/dbConnection');

app.use(cors({
    origin: "*",
}));

connectDB().then((param):void =>{
    param ? runServer(app) : console.log('server stoped');
})

app.use(express.json());
app.use('/api', router);

module.exports = app;