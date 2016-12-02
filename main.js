// Ensure jQuery has loaded before calling any of it's functions.
$(document).ready(function() {

  // Select the form and listen for when it's submitted.
  $('form').submit(function(event) {

    // 'this' refers to the selected 'form' element. Call the serialize() function on it to capture the
    // content of it's form field/s and turn it into a JS object that can be used later.
    var formData = $(this).serialize();

    // jQuery's ajax function sends the form's data to the server and handles the the success or fail response
    // that it will return.
    $.ajax({
        type        : 'POST', // define the type of HTTP verb we want to use.
        //url         : 'http://localhost:3000/subscribers', // the url where we want to POST
        url         : 'https://web2-product-page.herokuapp.com/subscribers', // The url where we want to POST the form data.
        data        : formData, // form field value/s to send
        dataType    : 'json' // what type of data do we expect back from the server
    }).done(function(data) {
        // done() is called when a successful request has completed
         console.log(data);
         $('#confirmation').fadeIn();
         $('#error-message').text("");
         $('input[name=email]').val("");
       }).fail(function(data) {
         // fail() is called if there's an error created will executing the request.
         console.log(data);
         var errorMessage = JSON.parse(data.responseText).email[0];
         $('#error-message').text(errorMessage);
         $('#confirmation').hide();
       });

    // Stop the form from submitting the normal way and halt screen refresh.
    event.preventDefault();
  });
});
