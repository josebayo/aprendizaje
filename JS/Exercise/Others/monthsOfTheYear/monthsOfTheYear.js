var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", 
"October", "November", "December"];

//Función
/*function showMonths(arrayMonths) {
    for (var i = 0; i < arrayMonths.length; i++) {
        alert(arrayMonths[i]);
        //console.log(arrayMonths[i]);
    }
}

showMonths(months);*/

//Función flecha
var mostrarMeses = (arrayMeses) => {
    for (var i = 0; i < arrayMeses.length; i++) {
        //alert(arrayMeses[i]);
        console.log(arrayMeses[i]);
    }
};

mostrarMeses(months);