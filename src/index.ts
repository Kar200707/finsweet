const app = require('./app');

app.get('/', (req, res):void =>{
    res.status(200).json('finsweet server');
})