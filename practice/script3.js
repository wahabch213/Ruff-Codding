
let country = {
    MONTHCALL: function() {
      const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
      const callMonth = parseInt(prompt("Enter Month"), 10);
      if (isNaN(callMonth) || callMonth < 1 || callMonth > 12) {
        console.log("Invalid month entered. Please enter a number between 1 and 12.");
      } else {
        console.log(`Running Month Is : ${months[callMonth - 1]}`);
      }
    }
  };
  
  country.MONTHCALL();