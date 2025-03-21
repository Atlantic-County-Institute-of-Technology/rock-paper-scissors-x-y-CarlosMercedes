const oppText = document.getElementById("opponentName")

const roundNum = document.getElementById("roundNum")
const userNum = document.getElementById("userWins")
const aiNum = document.getElementById("aiWins")

const resetNumber = document.getElementById("resetCount")
const resetGameButton = document.getElementById("resetGame")
const narrator = document.getElementById("roundNarrator")

const rockButton = document.getElementById("itemRock")
const paperButton = document.getElementById("itemPaper")
const scissorsButton = document.getElementById("itemScissors")
const paperclipButton = document.getElementById("itemPaperclip")
const lampButton = document.getElementById("itemLamp")
const confirmButton = document.getElementById("confirmButton")

const yourArea = document.getElementById("YourArea")
const oppArea = document.getElementById("opponentArea")

//Variables
var playerCount;
var oppCount;

let timeoutID;

var opponentPicking = false

var roundNumber = 0
var userWins = 0
var aiWinCount = 0

//Opponent gets random name to give vision they are real
window.onload = function randomizeOppName() {

    let randomName = Math.floor(Math.random() * 5) + 1

    if (randomName == 1) {
        oppText.textContent = "Peter"
        oppText.style.right = "63.1%"
        randomName = "Peter"
    }

    if (randomName == 2) {
        oppText.textContent = "Robert"
        oppText.style.right = "62%"
        randomName = "Robert"
    }

    if (randomName == 3) {
        oppText.textContent = "John"
        oppText.style.right = "63%"
        randomName = "John"
    }
    
    if (randomName == 4) {
        oppText.textContent = "Jerry"
        oppText.style.right = "63.2%"
        randomName = "Jerry"
    }

    if (randomName == 5) {
        oppText.textContent = "Alex"
        oppText.style.right = "63.6%"
        randomName = "Alex"
    }
}

//UI buttons
resetNumber.addEventListener('click', function () {
    roundNum.textContent = "Round "
    userNum.textContent = "Your wins: "
    aiNum.textContent = "Opponent wins: " 
})

resetGameButton.addEventListener('click', function () {
    location.reload()
})

//Whatever the player chooses
rockButton.addEventListener('click', function () {
    narrator.textContent = "You picked: Rock";
    narrator.style.fontSize = "42px";
    confirmButton.style.display = "block";

        confirmButton.addEventListener('click', function () {
            playerCount = 1
        })

})

paperButton.addEventListener('click', function () {
    narrator.textContent = "You picked: Paper"
    narrator.style.fontSize = "42px";
    confirmButton.style.display = "block";

    confirmButton.addEventListener('click', function () {
        playerCount = 2
    })
})

scissorsButton.addEventListener('click', function () {
    narrator.textContent = "You picked: Scissors"
    narrator.style.fontSize = "40px";
    confirmButton.style.display = "block";

    confirmButton.addEventListener('click', function () {
        playerCount = 3
    })
})

paperclipButton.addEventListener('click', function () {
    narrator.textContent = "You picked: Paperclip"
    narrator.style.fontSize = "38px";
    confirmButton.style.display = "block";

    confirmButton.addEventListener('click', function () {
        playerCount = 4
    })
})

lampButton.addEventListener('click', function () {
    narrator.textContent = "You picked: Lamp"
    narrator.style.fontSize = "42px";
    confirmButton.style.display = "block";
    confirmButton.addEventListener('click', function () {
        playerCount = 5
    })
})

//Sets the player variable


//Makes the ai choose from either after 1 second to 3 seconds or in between
let opponentPickWait = (Math.random() * 3000) + 1000
let resultNarrator;

//AI is "picking"...
confirmButton.addEventListener('click', function () {

    confirmButton.style.display = "none"
    resetGameButton.style.display = "none"
    resetNumber.style.display = "none"

    narrator.textContent = "Opponent is picking..."

        function aiPickRandom() {
            let opponentRandomizeCount = Math.floor(Math.random() * 5) + 1
            oppCount = opponentRandomizeCount

            //Decide what the player and AI has 
            if (playerCount == 1 && oppCount == 1) {
                narrator.textContent = "You both picked rock! Tie!"
            }

            if (playerCount == 2 && oppCount == 1) {
                narrator.textContent = "Rock covers paper! " + randomName +  " wins!"
            }

            if (playerCount == 3 && oppCount == 1) {
                narrator.textContent = "Rock breaks scissors! " + randomName +  " wins!"
            }

            if (playerCount == 4 && oppCount == 1) {
                narrator.textContent = "Rock breaks paperclip! " + randomName +  " wins!"
            }

            if (playerCount == 5 && oppCount == 1) {
                narrator.textContent = "Rock covers paper! " + randomName +  " wins!"
            }
        }

    timeoutID = setTimeout(aiPickRandom, opponentPickWait);

})