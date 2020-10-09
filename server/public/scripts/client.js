console.log('Hello from js');

$(document).ready(onReady);

function onReady(){
    getQuotes();
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
        getQuotes();
        console.log('response:', response);
    }).catch(function(error){
        alert(error); //notifing the user of an error
    });
}

function getQuotes(){
    console.log('get the quote');
    // ajax = asyncronous javascript meaning several functions can occur simultaneously
    $.ajax({
        method: 'GET',
        url: '/quotes'
    }).then(function(response){  // preform the above get request and 'then' do something with the response
        console.log('response', response); // this is the res
        appendToDom(response);
    }); 
}

function appendToDom(response){
    console.log('hello');
    //take reponse from the server
    //append it to the div #output so it shows up in the DOM
    //can use html rather than append to empty
    $('#output').empty();
    for(let i =0; i<response.length; i++){
        let enteredQuote = response[i];
        $('#output').append(`
        <p>${enteredQutoe.quote}</p>
        <i>-${enteredQuote.author}</i>
    `);
    }
}