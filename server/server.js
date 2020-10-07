
const express = require('express'); //require express - gives us a function


//create an instance of express by calling the function
//returned above - gives us an object
const app = express();
const port = 5000;


//express static file serving - public is the folder name
app.use(express.static('server/public'));

const quotesData = require ('./modules/quotes.js'); //this enlue of quotesData object which you will move to data file

let quotesData = [ //move this to a data file you folder you will create and module.exports = quotesData
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

let index = 0;

app.get('/quotes', (req, res) => {
    console.log('hi from git request');
    res.send(quotesData);
});

app.get('/randomQuote', (req, res) => {
    let randomNumber = getRandomInt(quotes.Data.length);
    res.send(quotesData[randomNumber]);
});

function getRandomInt(){
    return Math.floor(Math.random()* Math.floor(max));
}

// how to write an annonymous function 
app.listen(port, () => {
  console.log('Up and running on port:', port);
});