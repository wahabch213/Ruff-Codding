
function leapYear(){
    let year = (document.getElementById("year").innerHTML);
    if (year %  4 == 0) {
        document.write("<p>This is a Leap Year.</p>");
    } else{
        document.write("<p>This is not a Leap Year.</p>")
    }
}