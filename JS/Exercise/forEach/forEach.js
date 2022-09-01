var numbers = [4, 7, 8, 9];

/*
numbers.forEach(function(element, index, arrangements) {
    console.log(element);
    console.log(index);
    console.log(arrangements);
});
*/


numbers.forEach(function (element, index, arrangements) {
    arrangements[index] = Math.pow(element, 2);
});

console.log(numbers);