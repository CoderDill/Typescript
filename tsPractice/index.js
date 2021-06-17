/**
 * Logs salad made of fruit1 & fruit2
 *
 * @param fruit1
 * @param fruit2
 * @returns nothing
 */
function makeFruitSalad(fruit1, fruit2) {
    var salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
    console.log(salad);
}
makeFruitSalad('banana', 'pineapple');
/**
 * Logs status
 *
 * @param status
 * @param repeat
 * @returns nothing
 */
function proclaim(status, repeat) {
    if (status === void 0) { status = 'not ready...'; }
    if (repeat === void 0) { repeat = 1; }
    for (var i = 0; i < repeat; i += 1) {
        console.log("I'm " + status);
    }
}
function useMagnifyingGlass() {
    console.log('I will use my magnifying glass.');
}
function determineCulprit() {
    return Math.floor(Math.random() * 2 + 1);
}
function doSleuthing(numberOfClues, clue1, clue2, suspect1, suspect2) {
    console.log('I am a famous detective and I will solve the crime.');
    var unnecessaryVariable = 'Why is this here?';
    console.log('Now I consider the first clue: ', clue1);
    console.log('Now I consider the second clue: ', clue1);
    var culpritNumber = determineCulprit();
    console.log('Now, I will return to you the culprit. There but for the grace of God go we.');
    if (culpritNumber == 1) {
        return (suspect1);
    }
    if (culpritNumber == 2) {
        return (suspect2);
    }
    return "I couldn't figure out who drank the priceless milk. :( :(";
}
var answer;
answer = doSleuthing(2, 'The parrot heard everything!', 'All the doors and windows were shut from the INSIDE.', 'Burglar Bob', 3);
console.log('The culprit was none other than ', answer, '!');
var customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];
//Write Your Code here:
function checkCustomersArray() {
    for (var el = 0; el < customersArray.length; el++) {
        if (typeof el === 'number') {
            console.log("Type error: " + el + " should be a string!");
        }
    }
}
checkCustomersArray();
