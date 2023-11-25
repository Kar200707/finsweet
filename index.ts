import path from "path";

const app = require('./src/app');

let express = require('express');
const distDir:string = __dirname + '/frontend/dist/'
app.use(express.static(distDir));

app.get('*', (req, res):void => {
    res.sendFile(path.join(distDir))
});