function operation() {
    var a = Number(prompt("Enter an option, please"));
    var b = document.getElementById('result');
    switch (a) {
        case 1 :
            b.innerHTML = input1 + input2;
            break;
        case 2 :
            b.innerHTML = input1 - input2;
            break;
        case 3 :
            b.innerHTML = input1 / input2;
            break;
        case 4 :
            b.innerHTML = input1 * input2;
            break;
        case 5:
            document.body.innerHTML = "¡You have left!"
    }
} 

function execution() {
    input1 = Number(prompt("Enter a value"));
    input2 = Number(prompt("Enter the following value"));
    
    document.getElementById('entry1').innerHTML = "First value " + input1;
    document.getElementById('entry2').innerHTML = "Second value " + input2;
}