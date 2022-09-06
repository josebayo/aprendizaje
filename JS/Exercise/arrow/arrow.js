// Arrow number
var number = [3, 6, 4, 8];

var number2 = number.map((b) => { ; return b * b; });

console.log(number2);


//Arrow string
function name {
    this.realName = "Josep";

    setTimeout(function () {
        this.realName = "Pesoj";

    }, 200)
}

var Name = new name();

console.log(name);