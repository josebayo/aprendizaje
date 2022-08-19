//ASK GOR THE AGE
var age = prompt("age");
//CHECK THAT WHAT YOU ENTERED IS A NUMBER
if (Number(age) == age) {
    //IF YOU ARE OVER 18
    if (age >= 18) {
        //PRINTS THE MESSAGE ON THE SCREEN
        document.write("Ok, you can drive")
    }
    else if (age < 18) {
        //PRINTS THE MESSAGE ON THE SCREEN
        document.write("Mistake, you can't drive")
    }
} 
//OTHERWISE
else {
    //SHOW A MESSAGE
    alert("Invalid number")
}
