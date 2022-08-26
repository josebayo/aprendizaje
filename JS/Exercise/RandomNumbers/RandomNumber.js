/* Create a button that when pressed generates a list of 10 random numbers in an empty select.
   Pressing again will reset the list.
*/

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateNumbers() {
    let items = document.getElementById("items");

    let generateOptions = "";
    for (let i = 0; i < 10; i++) {
        generateOptions += "<option>" + getRandomInt(1, 100) + "</option>";
    }

    items.innerHTML = generateOptions;

}