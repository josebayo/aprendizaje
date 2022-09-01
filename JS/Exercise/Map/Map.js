var numeros = [2, 5, 3, 6];

//numero.map(callback);
/*
var cuadrados = [];

for (var i = numeros.length - 1; i >= 0; i--) {
    var numero = numero[i];
    cuadrados.push(Math.pow(numero, 2));
}

console.log(cuadrados);
*/

var cuadrados = numeros.map(function(elemento){
    return elemento * elemento;
});


console.log(cuadrados);