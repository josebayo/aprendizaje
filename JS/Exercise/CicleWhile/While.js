/* // Ciclo para aumentar de desde 0 a 10 de uno en uno.

var counter = 0;
while (counter < 10) {
    counter = counter + 1;

    console.log(counter);
}

*/

/* // Ciclo para aumentar de desde 0 a 10 de uno en uno.

var counter = 0;
while (counter < 10) {
    counter ++;

    console.log(counter);
}

*/

/* // Ciclo para seleccionar solo los pares  que hay en el rango de 0 ... 10.

var counter = 0;
while (counter < 10) {
    counter = counter + 1;
    if (counter % 2 == 0) {

    console.log(counter);
    }
}

*/

/* //Ciclo para selecionar los numeros pares saltando los pares con "continue"

var counter = 0;
while (counter < 10) {
    counter ++;
    if (counter % 2 !== 0){
        continue;
    }
    console.log(counter);
}

*/

/* // Rompe o finaliza el ciclo con "break" (siempre poner una condición "if").

var counter = 0;
while (true) {
    counter ++;

    console.log(counter);

    if (counter >= 10) {
        break;
    }
}

*/

/* //
    Rompe o finaliza el ciclo, pero se realiza con "do", poniendo el "while" al final. 
    Se ejecuta una vez el ciclo y no se vuelve a repetir al llegar al "while".
    

var counter = 0;

do {
    counter ++;

    console.log(counter);

    if (counter >= 10) {
        break;
    }
}

while (true);

*/