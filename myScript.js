
let cards = []
let sum = 0
let hasBlackJack = false
let isALive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector('#cards-el')


let player = {
     name : "Aakash",
     chips : 200

}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips



function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    console.log(randomNumber)
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber === 11 || randomNumber === 12 || randomNumber === 13) {
        return 10
    } else {
        return randomNumber
    }

}
console.log(cards)

function startGame() {
    isALive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isALive = false
    }

    messageEl.textContent = message

    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    if (isALive && !hasBlackJack) {
        let card = getRandomCard()
        sum = sum + card
        cards.push(card)
        console.log(cards)
        renderGame()

    }

}



