
const Dice = new Image() //set up an image object for the dice face

let diceRoll = ((Math.floor(Math.random() * 6 )) + 1)

//display correct dice face
switch (diceRoll) {
    case 1: Dice.src="./img/dice1.png"; break
    case 2: Dice.src="./img/dice2.png"; break
    case 3: Dice.src="./img/dice3.png"; break
    case 4: Dice.src="./img/dice4.png"; break
    case 5: Dice.src="./img/dice5.png"; break
    case 6: Dice.src="./img/dice6.png"; break
    // default: Dice.src=""; break
}
document.getElementById("diceFace").innerHTML = Dice.src
// document.body.appendChild(Dice)
// diceFace.appendChild(Dice)
console.log (diceRoll)