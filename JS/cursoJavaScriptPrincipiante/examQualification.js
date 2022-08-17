//BUCLE PARA INTRODUCIR MÁS DE UNA NOTA
do {
	//SOLICITA NOTA POR TECLADO Y LA GUARDA EN LA VARIABLE nota
	var nota = prompt("Pon tu nota");
	//SI SE INTRODUJO UN NÚMERO
	if (Number(nota) == nota) {
		//SI LA NOTA ESTA ENTRE 0 Y 10 LO COMPRUEBA Y DA UN MENSAJE
		if (nota > 0 && nota <= 10) {
			if (nota < 3) {
				alert("Muy deficiente");
			}
			else if (nota < 5) {
				alert("Insuficiete");
			}
			else if (nota < 6) {
				alert("Suficiente");
			}
			else if (nota < 7) {
				alert("Bien");
			}
			else if (nota < 9) {
				alert("Notable"); 5
			}
			else if (nota >= 9) {
				alert("Sobresaliente");
			}
		}
		//SI LA NOTA NO ESTA ENTRE 0 Y 10
		else {
			alert("Nota erronea");
		}
	}
	//SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
	else {
		//SI SE HA PULSADO ACEPTAR SIN INTRODUCIR NADA
		if (nota != undefined) {
			alert("Introduce un número válido");
		}
	}
//EL BUCLE NO SE PARA HASTA SE HAYA PULSADO CANCELAR
} while (nota != undefined);