import categoryRouter from "./routers/category";
import userRouter from "./routers/user";
import postRouter from "./routers/post";
import logoRouter from "./routers/logo";
import authRouter from "./routers/auth";

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
app.use('/api/category', categoryRouter);
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/logos', logoRouter);
app.use('/api/', authRouter);

module.exports = app;