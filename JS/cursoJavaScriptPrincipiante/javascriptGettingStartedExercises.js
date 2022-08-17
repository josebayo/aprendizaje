//ASK GOR THE AGE
var age = prompt("age");
//CHECK THAT WHAT YOU ENTERED IS A NUMBER
if (Number(age) == age) {
    //IF YOU ARE OVER 18
    if (age => 18) {
        //PRINTS THE MESSAGE ON THE SCREEN
        document.write("Ok, your can driver")
    }
}
if (Number (age) == age) {
    //IF YOU ARE UNDER 18
    if (age < 18) {
        //PRINTS THE MESSAGE ON THE SCREEN
        document.write("Mistake, your can't driver")
    }
} 
//OTHERWISE
else {
    //SHOW A MESSAGE
    alert("Invalid number")
}
