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

const yourArea = document.getElementById("yourArea")
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
    //narrator.style.fontSize = "42px";
    confirmButton.style.display = "block";
    playerCount = 1
    yourArea.textContent = "rock"
})

paperButton.addEventListener('click', function () {
    narrator.textContent = "You picked: Paper"
    //narrator.style.fontSize = "42px";
    confirmButton.style.display = "block";
    playerCount = 2
    yourArea.textContent = "paper"
})

scissorsButton.addEventListener('click', function () {
    narrator.textContent = "You picked: Scissors"
   // narrator.style.fontSize = "40px";
    confirmButton.style.display = "block";
    playerCount = 3
    yourArea.textContent = "scissors"
})

paperclipButton.addEventListener('click', function () {
    narrator.textContent = "You picked: Paperclip"
    //narrator.style.fontSize = "38px";
    confirmButton.style.display = "block";
    playerCount = 4
    yourArea.textContent = "paperclip"
})

lampButton.addEventListener('click', function () {
    narrator.textContent = "You picked: Lamp"
    //narrator.style.fontSize = "42px";
    confirmButton.style.display = "block";
    playerCount = 5
    yourArea.textContent = "lamp"
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

    rockButton.style.display = "none"
    paperButton.style.display = "none"
    scissorsButton.style.display = "none"
    paperclipButton.style.display = "none"
    lampButton.style.display = "none"

    narrator.textContent = "Opponent is picking..."

        function aiPickRandom() {
            let opponentRandomizeCount = Math.round(Math.random() * 5) + 1

            if (opponentRandomizeCount == 1) {
                oppArea.textContent = "rock"
            }

            if (opponentRandomizeCount == 2) {
                oppArea.textContent = "paper"
            }

            if (opponentRandomizeCount == 3) {
                oppArea.textContent = "scissors"
            }

            if (opponentRandomizeCount == 4) {
                oppArea.textContent = "paperclip"
            }

            if (opponentRandomizeCount == 5) {
                oppArea.textContent = "lamp"
            }

            //Decide what the player and AI has 
            if (playerCount == 1 && opponentRandomizeCount == 1) {
                narrator.textContent = "You both picked rock!"
                yourArea.style.backgroundColor = "gray"
                oppArea.style.backgroundColor = "gray"
            }

            if (playerCount == 2 && opponentRandomizeCount == 1) {
                narrator.textContent = "Paper covers rock!"
                yourArea.style.backgroundColor = "green"
            }

            if (playerCount == 3 && opponentRandomizeCount == 1) {
                narrator.textContent = "Rock breaks scissors!"
                oppArea.style.backgroundColor = "green"
            }

            if (playerCount == 4 && opponentRandomizeCount == 1) {
                narrator.textContent = "Paperclip puts up a fight!"
                yourArea.style.backgroundColor = "green"
            }

            if (playerCount == 5 && opponentRandomizeCount == 1) {
                narrator.textContent = "Rock smashes lamp!"
                oppArea.style.backgroundColor = "green"
            }

            if (playerCount == 1 && opponentRandomizeCount == 2) {
                narrator.textContent = "Paper covers rock!"
                oppArea.style.backgroundColor = "green"
            }

            if (playerCount == 2 && opponentRandomizeCount == 2) {
                narrator.textContent = "You both picked paper!"
                yourArea.style.backgroundColor = "gray"
                oppArea.style.backgroundColor = "gray"
            }

            if (playerCount == 3 && opponentRandomizeCount == 2) {
                narrator.textContent = "Scissors cut paper!"
                yourArea.style.backgroundColor = "green"
            }

            if (playerCount == 4 && opponentRandomizeCount == 2) {
                narrator.textContent = "Paper engulfes paperclip!"
                oppArea.style.backgroundColor = "green"
            }

            if (playerCount == 5 && opponentRandomizeCount == 2) {
                narrator.textContent = "Lamp burns paper!"
                yourArea.style.backgroundColor = "green"
            }

            if (playerCount == 1 && opponentRandomizeCount == 3) {
                narrator.textContent = "Rock smashes scissors!"
                yourArea.style.backgroundColor = "green"
            }

            if (playerCount == 2 && opponentRandomizeCount == 3) {
                narrator.textContent = "Scissors cut paper!"
                oppArea.style.backgroundColor = "green"
            }

            if (playerCount == 3 && opponentRandomizeCount == 3) {
                narrator.textContent = "You both picked scissors!"
                yourArea.style.backgroundColor = "gray"
                oppArea.style.backgroundColor = "gray"
            }

            if (playerCount == 4 && opponentRandomizeCount == 3) {
                narrator.textContent = "Paperclip clips scissors closed!"
                yourArea.style.backgroundColor = "green"
            }

            if (playerCount == 5 && opponentRandomizeCount == 3) {
                narrator.textContent = "Scissors cuts lamp cord!"
                oppArea.style.backgroundColor = "green"
            }

            if (playerCount == 1 && opponentRandomizeCount == 4) {
                narrator.textContent = "Paperclip puts up a fight!"
                oppArea.style.backgroundColor = "green"
            }

            if (playerCount == 2 && opponentRandomizeCount == 4) {
                narrator.textContent = "Paper engulfs paperclip!"
                yourArea.style.backgroundColor = "green"
            }

            if (playerCount == 3 && opponentRandomizeCount == 4) {
                narrator.textContent = "Paperclip clips scissors closed!"
                oppArea.style.backgroundColor = "green"
            }

            if (playerCount == 4 && opponentRandomizeCount == 4) {
                narrator.textContent = "You both picked paperclip!"
                yourArea.style.backgroundColor = "gray"
                oppArea.style.backgroundColor = "gray"
            }

            if (playerCount == 5 && opponentRandomizeCount == 4) {
                narrator.textContent = "Lamp rusts paperclp!"
                yourArea.style.backgroundColor = "green"
            }

            if (playerCount == 1 && opponentRandomizeCount == 5) {
                narrator.textContent = "Rock smashes lamp!"
                yourArea.style.backgroundColor = "green"
            }

            if (playerCount == 2 && opponentRandomizeCount == 5) {
                narrator.textContent = "Lamp burns paper!"
                oppArea.style.backgroundColor = "green"
            }

            if (playerCount == 3 && opponentRandomizeCount == 5) {
                narrator.textContent = "Scissors cuts lamp cord!"
                yourArea.style.backgroundColor = "green"
            }

            if (playerCount == 4 && opponentRandomizeCount == 5) {
                narrator.textContent = "Lamp rusts paperclp!"
                oppArea.style.backgroundColor = "green"
            }

            if (playerCount == 5 && opponentRandomizeCount == 5) {
                narrator.textContent = "You both picked paperclip!"
                yourArea.style.backgroundColor = "gray"
                oppArea.style.backgroundColor = "gray"
            }
        }

    timeoutID = setTimeout(aiPickRandom, opponentPickWait);

})