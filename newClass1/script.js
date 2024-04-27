

// $("#btn").click(function(){
//     $(".box").css("background","blue").fadeToggle(2000).css("opacity","50%").slideToggle(1000)
// })


// $(".container").child(function(){
//     $("._2").css("background","blue")
// })

$(document).ready(function() {
    $("._5").parentsUntil("._2").css("background","yellow")
    $("._5").parent().css("background","red")
    $("._5").css("background","blue")
    })