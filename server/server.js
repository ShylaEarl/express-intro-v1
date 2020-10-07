
const express = require('express'); //require express - gives us a function
const bodyParser = require('body-parser'); //body parser 'parses' through data from server? client? 

//create an instance of express by calling the function
//returned above - gives us an object
const app = express();
const port = 5000;


//express static file serving - public is the folder name
app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

const quotesData = require ('./modules/quotes.js'); //this enlue of quotesData object which you will move to data file

let index = 0;

app.get('/quotes', (req, res) => {
    console.log('hi from git request');
    res.send(quotesData);
});

app.get('/randomQuote', (req, res) => {
    let randomNumber = getRandomInt(quotesData.list.length);
    res.send(quotesData.list[randomNumber]); // to send numbers use res.sendStatus(); or put it in an object res.send({number: quotesData.index}); bc index is defined as 0 in quotes.js
});

function getRandomInt(max){
    return Math.floor(Math.random()* Math.floor(max));
}

app.post('/quotes', (req, res) => {
    console.log('hello from post', req.body); // req.body is related to body parser. important to add console.log with descriptive strings in each app to debug/know where things are/coming from
    quotesData.list.push(req.body); //pushing new data (from postman or DOM) into our existing array
    res.sendStatus(200);
});

// how to write an annonymous function. Also you need this to 'port' to the DOM
app.listen(port, () => {
  console.log('Up and running on port:', port); //keep this console.log so you know things are working
});