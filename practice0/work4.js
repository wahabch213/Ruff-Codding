// for (let a = 1, b = 5; a<=10; a++) {
//     document.write("5*"+ a + "=" + a*b + "<br>")
//     // document.write(a + " x " + b + " = " + a*b + "<br>")
// }

let c = Number(prompt("Enter Table Number: "))
let e = Number(prompt("Enter Range Of Table: "))
let i = 1;
while (i <= e){
    
    document.write(c + " x " + i + " = " + c*i + "<br>")
    i++;
}
