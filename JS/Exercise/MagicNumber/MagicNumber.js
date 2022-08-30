function magicNumber() {

    // Max number

    var max = 100;

    // Min number

    var min = 1;

    // Random nunber

    var secretNumber = Math.random() * (max - min) + min;

    secretNumber = parseInt(secretNumber);

    console.log(secretNumber);

    var message = "Enter a number to guess the magic number";

    while (true) {
        var userNumber = prompt(message, "0");

        userNumber = parseInt(userNumber);

        if (userNumber === secretNumber) {
            alert("You win!!! You got the number right");
            break;
        }

        else if (userNumber > secretNumber) {
            message = "Sorry, the number you entered is greater than the magic number";
        }

        else if (userNumber < secretNumber) {
            message = "Sorry, the number you entered is less than than the magic number";
        }
    }

}