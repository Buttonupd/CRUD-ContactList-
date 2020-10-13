var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongodb

mongoose.connect('mongodb://localhost:27017/contactlist');

// on connection
mongoose.connection.on('connected', () => {
    console.log('connected to database @', + port );

});
mongoose.connection.on('error', (err) => {
    if(err){
        console.log("Error at " + err);

    }
});


//port number
const port = 3000;

//adding middleware
app.use(cors());

//bodyParser

app.use(bodyParser.json());

// static files
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', route)



//testing server
app.get('/', (req, res) => {
    res.send("foobar")
})

app.listen(port, () => {
    console.log(" Server started at port: ", + port);

});
