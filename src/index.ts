const express = require('express');
const app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log('server started http://localhost:'+ port)
})

app.use(express.json());

app.get('/', (req, res)=>{
    res.status(400).json('karen');
})