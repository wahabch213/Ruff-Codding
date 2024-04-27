
stdname =("ENTER YOUR NAME");
marks =("ENTER YOUR MARKS");

prompt(stdname)
parseInt(prompt(marks))


if (marks >= 33 && marks <= 45){
    alert("Your Grade is C")
}
else if (marks >= 46 && marks <= 60){
    alert("Your Grade is B")
}
else if (marks >= 61 && marks <= 75){
    alert("Your Grade is A")
}
else if (marks >= 76 && marks <= 100){
    alert("Your Grade is A+")
}
else {
    alert("Enter Valid Marks")
}
