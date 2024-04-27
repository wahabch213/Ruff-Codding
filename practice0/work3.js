let day = parseInt(prompt("Enter Date (1-31): "))
let month = string(prompt("Enter Month"))
let year = parseInt(prompt("Enter Year: "))


const days = new Date(year, month -1, day)
const getday = days.getDay();

const weekday =  {}



switch (getday){
    case 0:
        weekday("Monday")
break;
    case 1:
        weekday("Tuesday")

break;
    case 2:
        weekday("Wednesday")

break;
    case 3:
        weekday("Thursday")

break;
    case 4:
        weekday("Friday")

break;
    case 5:
        weekday("Saturday")

break;
    case 6:
        weekday("Sunday")

break;
}
