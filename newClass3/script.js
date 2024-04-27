

// $(document).ready(function(){
//            let a = $("#input1").value
//            $(".box").innerHTML = a
// })



// JavaScript
$(document).ready(function() {
  $('#submitButton').click(function() {
    var userInput = $('#userInput').val();
    $('#myDiv').html('Hello ' + userInput);
  });
});

// HTML
<input type="text" id="userInput">
<div id="output"></div>

// jQuery
$(document).ready(function(){
    $('#userInput').on('input', function(){
        var inputText = $(this).val();
        $('#output').text(inputText);
    });
});