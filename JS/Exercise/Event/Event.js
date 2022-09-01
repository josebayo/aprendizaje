/*function clic() {
    alert(":3");
}*/

/*
document.getElementById("miBtn"). addEventListener("click",click,true);

function clic() {
    alert("3");
}*/


/*document.getElementById("myDiv").addEventListener("click",anotherClic,true);

document.getElementById("miBtn"). addEventListener("click",click,false);

function clic(){
    alert("Esto fue disparado por el botón");
}

function anotherClic() {
    alert("Esto fue disparado por div");
}*/


/*document.getElementById("myDiv").addEventListener("click",anotherClic,false);

document.getElementById("miBtn"). addEventListener("click",click,true);

function clic(){
    alert("Esto fue disparado por el botón");
}

function anotherClic() {
    alert("Esto fue disparado por div");
}*/


document.getElementById("myDiv").addEventListener("click",anotherClic,false);

document.getElementById("miBtn"). addEventListener("click",click,false);

function clic(){
    alert("Esto fue disparado por el botón");
}

function anotherClic() {
    alert("Esto fue disparado por div");
}