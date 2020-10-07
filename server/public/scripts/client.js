console.log('Hello from js');

$(document).ready(onReady);

function onReady(){
    console.log('hello from jquery');
    getRandomQuote();
}

function getRandomQuote(){
    console.log('get the quote');
    // ajax = asyncronous javascript meaning several functions can occur simultaneously
    $.ajax({
        method: 'GET',
        url: '/randomQuote'
    }).then(function(response){  // preform the above get request and 'then' do something with the response
        console.log('response', response); // this is the res
        appendToDom(response);
    }); 
}

function appendToDom(dataToAppend){
    //take reponse from the server
    //append it to the div #output so it shows up in the DOM
    $('#output').append(`
        <p>${dataToAppend.quote}</p>
        <i>-${dataToAppend.author}</i>
    `);
}