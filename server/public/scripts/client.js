console.log('Hello from js');

$(document).ready(onReady);

function onReady(){
    getRandomQuote();
    $('#submit').on('click', submitQuote);
}

function submitQuote(){
    //grabbing value (or input) from the DOM
    let quote = $('#quote').val();
    let author = $('#author').val();
    console.log('in click', quote, author);

    //send data to server via post request
    $.ajax({
        method: 'POST',
        url: '/submitquotes',
        data: {
            quote: quote,
            author: author
        }
    }).then(function(response){
        console.log('response:', response);
    }).catch(function(error){
        alert(error); //notifing the user of an error
    });
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