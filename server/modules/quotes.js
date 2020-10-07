
let quotesData = [ //move this to a data file you folder you will create and module.exports = quotesData
    { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
    { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
    { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];

//module.exports = quotesData;

//can also export objects, functions, etc.

let index = 0

module.exports = {
    list: quotesData,
    index: index
}