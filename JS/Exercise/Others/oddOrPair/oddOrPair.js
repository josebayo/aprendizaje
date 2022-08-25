
    // Enter number
    var x = window.prompt('Enter the number to check');

    // Check if a correct value has been entered
    if (isNaN(x)) {
        alert('It is not a valid value')
    } else {
        if (x % 2 == 0) {
            alert('The number ' + x + ' is pair');
        } else {
            alert('The number ' + x + ' is odd');
        }
    }