const oppText = document.getElementById("opponentName")
const resetGameButton = document.getElementById("resetGame")

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

resetGameButton.addEventListener('click', function () {
    location.reload()
})
