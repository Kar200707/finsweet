import categoryRouter from "./routers/category";
import userRouter from "./routers/user";
import postRouter from "./routers/post";
import * as path from "path";

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

const distDir:string = __dirname + '/frontend/dist/'

app.use(express.json());
app.use('/api/category', categoryRouter);
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use(express.static(distDir));


app.get('*', (req, res) => {
    res.sendFile(path.join(distDir));
    console.log(distDir)
});

module.exports = app;