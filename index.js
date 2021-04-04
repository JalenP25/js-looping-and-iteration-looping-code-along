// Code your solutions in this file
let names = [];
function writeCards(people, surprise) {
    for (let i = 0; i < people.length; i++) {
        names.push(`Thank you, ${people[i]}, for the wonderful ${surprise} gift!`);
    }
    return names;
}

function countDown(number){
    while (number > 0) {
        console.log(number--)
    }
    console.log(number)
}