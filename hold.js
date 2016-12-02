$( document ).ready(function() {
  $( "#subscribe" ).submit(function( event ) {
    $('#confirmation').fadeIn();
    $('#subscribe').hide();
    event.preventDefault();
  });
  
  $('h2').click(function() {
    $('h1').text("You can change the value of anything in the DOM");
  })
  
  $('h2').hover(function() {
    $('h1').text("You can change the value of anything in the DOM");
  })
});

// $('h1').text(message);
//   console.log("I've been called.");

function updateMessage(message, x) {
  var names = ["Luke", "Gemma", "Joe", "Jamal", "Allison"];
  $('h1').text(names[x]);

}