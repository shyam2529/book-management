const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const api = require('./routes/api');
 
const port = 3000;
 
app.listen(port, function () {
    console.log("Server is listening at port:" + port);
});
 
// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));
 
// Parses the text as json
app.use(bodyParser.json());
 
app.use('/api', api);