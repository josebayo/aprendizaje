// Current date

var date = new Date();

console.log(date);

// Greeting + current date

var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();

function currentMonth(numberMonth) {
    if (numberMonth == 0) {
        month = 1;
    }
    else if (numberMonth == 1) {
        month = 2;
    }
    else if (numberMonth == 3) {
        month = 4;
    }
    else if (numberMonth == 4) {
        month = 5;
    }
    else if (numberMonth == 5) {
        month = 6;
    }
    else if (numberMonth == 6) {
        month = 7;
    }
    else if (numberMonth == 7) {
        month = 8;
    }
    else if (numberMonth == 8) {
        month = 9;
    }
    else if (numberMonth == 9) {
        month = 10;
    }
    else if (numberMonth == 10) {
        month = 11;
    }
    else if (numberMonth == 11) {
        month = 12;
    }

}

currentMonth(month); 

console.log("Hello, today is " + day + " of the month " + month + " of the year " + year);

