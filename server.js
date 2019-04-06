var express = require('express');
var body_parser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(body_parser());

app.route('/api/humidity')
    .post((req, res, next) => {
        console.log(req.body);
        res.status(200).send();
    })

app.listen(5555);
console.log('houseplants server running on port 5555');
