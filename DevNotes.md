# My attempt an Model View controllers

    // multiple buttions for one form
 $("#my-form button").click(function(ev){
   ev.preventDefault()// cancel form submission
   if($(this).attr("value")=="button-one"){
       do button 1 thing
   }
    $("#my-form").submit(); if you want to submit the form
 });

