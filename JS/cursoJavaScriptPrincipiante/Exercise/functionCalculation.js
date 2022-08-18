//We launch a calculation funcion
function calculate(number=1) {
    var calc = number * number;
    document.write(`<p/> Result = ${calc} </p>`);
}
/*
    Anotate below the <body> line this label in the file basicPage.htm:
    <input type="button" onclick="calculate()" value="Calculation">
	<input type="button" onclick="calculate(5)" value="Another calculation"> 
*/