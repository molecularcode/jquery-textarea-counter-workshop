$( "#the-textarea" ).keyup(function() {
  // alert( "Handler for .keyup() called." );
  console.log('Event: keyup');
  var value = $(this).val();
  $("span#character-counter").text(140-value.length);
  var counter = value.length;
  
  if(counter<(140*0.8)) {
      $( "span#character-counter" ).last().addClass( "green" ).removeClass( "yellow" );
  }
  else if(counter>=(140*0.8) && counter<=(140*0.9)) {
      $( "span#character-counter" ).last().addClass( "yellow" ).removeClass( "green red" );
  }
  else {
      $( "span#character-counter" ).last().addClass( "red" ).removeClass( "green" );
  }
});