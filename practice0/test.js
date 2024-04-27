let naam = String(prompt("Enter Your Name"));
let desigenation = String(prompt("Enter Your Designation ' ' Enter A For (Worker) & B For (Manager)"));
salry = parseInt(prompt("Enter Your Sallery ?"))


if (desigenation == 'A') {

    if (salry > 50000 && salry < 35000) {
        (A = salry / 100 * 30 + salry)
        document.write("Mr " + naam + " Your Current Sallery Is:  " + salry + "  Now With 30% Increment It's: " + A);
        document.write(". Your Increment Is: " + salry / 100 * 30);
    }
    else (alert("Error ! Enter Correct Salary"));
}

else if (desigenation == 'B') {
    
    if (salry < 50000 && salry > 80000) {
        B = salry / 100 * 20 + salry
        document.write("Mr " + naam + " Your Current Sallery Is:  " + salry + "  Now With 20% Increment It's: " + B);
        document.write(". Your Increment Is: " + salry / 100 * 20);   
    }
    else (alert("Error ! Enter Correct Salary"))
}

else (alert("Please Enter Correctly (A & B)"))