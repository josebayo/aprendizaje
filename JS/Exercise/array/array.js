/*
Crear un vector con 5 valores numéricos.
Comprueba si son todos enteros positivos.
Devuelve en un nuevo array el triple sus valores.
Calcula  el resultado de multiplicar todos los valores
del nuevo array del nuevo array.
*/

var mi_array = [-2, 1, 3, 4, 5];
document.write('El array principal es ' + mi_array);

var triple = [];
var multiplicado = 1;

for (let x of mi_array) {
    if (x < 0) {
        document.write('<br />Existe un valor negativo, es ' + x);
    }
    triple.push(x * 3);
    multiplicado *= x;
}

document.write('<br />El array con triples es ' + triple);
document.write('<br />El resultado de multiplicar todo es ' + multiplicado);