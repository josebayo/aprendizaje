// Pi value

function showPi() {
    var pi = Math.PI;

    console.log(pi);

}

// Call function showPi

//showPi();


// Least and high number

//console.log(Math.min(1, 32, 54, -34, -32))

//console.log(Math.max(1, 32, 54, -34, -32))


// Round number

//console.log(Math.round(3.7))

//console.log(Math.floor(3.9))

//console.log(Math.ceil(3.1))


// Random number

//var random = Math.random();

//console.log(random);


// Random number (0 ... 55)

function randomNumber(min, max) {
    var minimun = Math.ceil(min);
    var maximun = Math.floor(max);
    return Math.floor(Math.random() * (maximun - minimun + 1) + minimun);
}

//console.log(randomNumber(0, 55));