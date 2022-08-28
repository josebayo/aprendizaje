/* Exercise 1.
   Show the pair numbers of the following array:
   (0,1,2,3,4,5,6,7,8,9,10,11,12)
*/

function numbersPair(array) {
    var pair = array;
    for (var i = 0; i <= 12; i = i + 1 * 2) {
        console.log(i);
    }
}

var pair = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

//console.log(numbersPair(pair));


/* Exercise 1.
   Show the pair numbers of the following array:
   (0,1,2,3,4,5,6,7,8,9,10,11,12)
*/

for (var i = 0; i < pair.length; i += 1) {
    if (i % 2 == 0) {
        //    console.log(i);
    }
}

/* Exercise 2.
   Sum all the numbers in the array:
   (0,1,2,3,4,5,6,7,8,9,10,11,12)
*/

function sumNumbers(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

     //   console.log("The total of the sum of the numbers is: " +sum);
}

sumNumbers (pair);