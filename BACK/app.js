const express = require('express');
const bodyParser = require('body-parser');
const routesBprosys = require('./routes/bprosys.routes');
var cors = require('cors');
const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api/v1', routesBprosys);

app.all('*', (_, res) => {
    res.status(404).json({ message:'Not found', data: null})
});

module.exports = app;