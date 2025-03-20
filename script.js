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

var selectedRock = false
var selectedPaper = false
var selectedScissors = false
var selectedPaperclip = false
var selectedLamp = false

let timeoutID;

//Opponent gets random name to give vision they are real
window.onload = function randomizeOppName() {

    let randomName = Math.floor(Math.random() * 5) + 1

    if (randomName == 1) {
    oppText.textContent = "Peter"
    oppText.style.right = "63.1%"
    }

    if (randomName == 2) {
        oppText.textContent = "Robert"
        oppText.style.right = "62%"
        }

    if (randomName == 3) {
        oppText.textContent = "John"
        oppText.style.right = "63%"
        }
    
    if (randomName == 4) {
        oppText.textContent = "Jerry"
        oppText.style.right = "63.2%"
        }

    if (randomName == 5) {
        oppText.textContent = "Alex"
        oppText.style.right = "63.6%"
        }
}

//UI buttons
resetNumber.addEventListener('click', function () {
    roundNum.textContent = "Round 0"
    userNum.textContent = "Your wins: 0"
    aiNum.textContent = "Opponent wins: 0"
})

resetGameButton.addEventListener('click', function () {
    location.reload()
})

//Whatever the player chooses
rockButton.addEventListener('click', function () {
    narrator.textContent = "You picked: Rock"
    narrator.style.fontSize = "42px";
    confirmButton.style.opacity = "100"
})

paperButton.addEventListener('click', function () {
    narrator.textContent = "You picked: Paper"
    narrator.style.fontSize = "42px";
    confirmButton.style.opacity = "100"
})

scissorsButton.addEventListener('click', function () {
    narrator.textContent = "You picked: Scissors"
    narrator.style.fontSize = "40px";
    confirmButton.style.opacity = "100"

})

paperclipButton.addEventListener('click', function () {
    narrator.textContent = "You picked: Paperclip"
    narrator.style.fontSize = "38px";
    confirmButton.style.opacity = "100"
})

lampButton.addEventListener('click', function () {
    narrator.textContent = "You picked: Lamp"
    narrator.style.fontSize = "42px";
    confirmButton.style.opacity = "100"
})

//AI is "picking"...
