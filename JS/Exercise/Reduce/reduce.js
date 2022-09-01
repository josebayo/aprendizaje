/*
var letters = ["H", "e", "l", "l", "o"];

console.log(letters.join(""));
*/


/*
var letters = ["H", "e", "l", "l", "o"];

var word = letters.reduce(function(valor_anterior_retornado, valor_actual, index, arreglo){
    return valor_anterior_retornado + valor_actual;
})

console.log(word);
*/

/*
var letters = ["H", "e", "l", "l", "o"];

var word = letters.reduce(function (valor_anterior_retornado, valor_actual, index, arreglo) {
    return valor_anterior_retornado + valor_actual;
});

console.log(word);
*/

/*
var numbers = [234, 324, 43, 4];

var add = numbers.reduce(function(valor_anterior_retornado, valor_actual, index, arreglo){
    return valor_anterior_retornado + valor_actual;
});
console.log(add);
*/


var numbers = [234, 324, 43, 4];

var add = 0;

for(var i = 0; i < numbers.length; i++) {
    add += numbers [i];
}

console.log(add);