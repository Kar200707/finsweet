import categoryRouter from "./routers/category";
import userRouter from "./routers/user";
import postRouter from "./routers/post";
import logoRouter from "./routers/logo";
import authRouter from "./routers/auth";
import contactUs from "./routers/contactUs";
import subRouter from "./routers/subscribe";
import privacyPolicy from "./routers/privacyPolicy";

const express = require('express');
const cors = require('cors');
const app = express();
const runServer = require('../src/server/server');
const connectDB = require('../src/DB/dbConnection');

app.use(cors({
    origin: "https://finsweet.adaptable.app",
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://finsweet.adaptable.app")
})

connectDB().then((param):void =>{
    param ? runServer(app) : console.log('server stoped');
})

app.use(express.json());
app.use('/api/category', categoryRouter);
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/logos', logoRouter);
app.use('/api/contact-us', contactUs);
app.use('/api/subscribe', subRouter);
app.use('/api/privacy-policy', privacyPolicy);

app.use('/api/', authRouter);

module.exports = app;