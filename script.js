//logic went off course as didnt quite understamd how eventListener operated
//tried to make many player version but this overcomplicated it

//set up a player as a class
class player {
    constructor (player) {
        this.result = 0
        this.score = 0
        //create unique scoreBox name depending on player ID. Must match HTML ID
        this.scoreBox = `scoreBox${player}`
        this.winLoose = `winLoose${player}`
    }// end constructor

    play =() => {
        this.result = rollDice()
        console.log('rolled a ', this.result)
        if (this.result == 1) {
            console.log('lost'); 
            document.getElementById(this.winLoose).innerHTML = "LOST"
            this.score = 0; this.result = 0   //reset score
            gameOver=true
            return     
        }
        this.score += this.result
        if (this.score > 20) {
            console.log('won')
            document.getElementById(this.winLoose).innerHTML = "WON"
            this.score = 0; this.result = 0   //reset score
            gameOver=true
            return
        }
        //display score to screen
        console.log (`score = ${this.score}`)
        document.getElementById(this.scoreBox).innerHTML = this.score
    } //end play
    resetScore = () => {
        this.score = 0; this.result = 0   //reset score
    }
}

let rollDice = () => { //roll a dice, return reesult and display dice face
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
        default: console.log('rollDice default error'); break
    }//end switch

    //access element diceFace and set up with dice face image
    let diceFace = document.getElementById("diceFace")
    diceFace.src = Dice.src
    diceFace.appendChild(Dice)
    return (diceRoll)
} //end rollDice

let quitGame = () => {
    let key = event.key
    console.log(key)
    if (key == 'q') {
        diceFace.removeEventListener("click", playGame)
        document.removeEventListener("keypress", quitGame)
    }
} //end quitGame

let playGame = () => {
    gameOver = false
    switch (turn) {
        case 1: 
            document.getElementById("player2").style.background = "green";
            document.getElementById("player1").style.background = "red";
            p1.play(); turn = 2; 
            if (gameOver) {
                p1.resetScore; p2.resetScore
                // document.getElementById(p1.scoreBox).innerHTML = 'Start'
                // document.getElementById(p2.scoreBox).innerHTML = 'Start'
            }
            break;
        case 2: 
            document.getElementById("player1").style.background = "green";
            document.getElementById("player2").style.background = "red";
            p2.play(); turn = 1; 
            if (gameOver) {
                p1.resetScore; p2.resetScore
                // document.getElementById(p1.scoreBox).innerHTML = 'Start'
                // document.getElementById(p2.scoreBox).innerHTML = 'Start'
            }
            break;
    } //end switch

} //end playGame

//MAIN
let p1 = new player('player1') //names must match format of HTML ID
let p2 = new player('player2')
//let gameOver = false //boolean to check if game won or lost. Set in player.
document.getElementById("diceFace").src = "./img/dice6.png" //initial diceface
let turn = ((Math.floor(Math.random() * 2 )) + 1) //randomise who starts
document.getElementById(`player${turn}`).style.background = "red";//player who starts in red
diceFace.addEventListener("click", playGame)
document.addEventListener("keypress", quitGame)



