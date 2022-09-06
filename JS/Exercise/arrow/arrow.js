// Arrow number
/*
var number = [3, 6, 4, 8];

var number2 = number.map((b) => return b * b);

console.log(number2);
*/


//Arrow string
/*
function Name() {
    this.realName = "Josep";

    setTimeout(function () {
        this.realName = "Pesoj";

    }, 200);
}


var name = new Name();

console.log(name);

console.log(name.realName);
*/


// Change function nomal to function arrow
var nameArrow = () => {
    var realName = "Josep";

    console.log(realName);

    setTimeout(function () {
        realName = "Pesoj";
        console.log(realName);
    }, 200);
};

nameArrow();
