class Player {
    constructor(name) {
        this.name = name
        this.score = 0
        this.hand = []
    }
    playCard() {
        return this.hand.pop()
    }
    addPoint() {
        this.score = this.score += 1
    }
}

class Deck {
    constructor() {
        this.deck = []
    }
    shuffleDeck() {
        this.deck = this.deck.sort(() => Math.random() -0.5)
    }
    dealCards(p1, p2) {
        while(this.deck.length > 0) {
            p1.hand.push(this.deck.pop())
            p2.hand.push(this.deck.pop())
        }
    }
}

class Card {
    constructor(suit, num) {
        this.suit = suit
        this.num = num
    }
}

const player1 = new Player(prompt("Enter player one's name: "))
const player2 = new Player(prompt("Enter player two's name: "))
const gameDeck = new Deck

const suits = ["♣", "♦", "♥", "♠",]

suits.forEach( ( suit) => {
    for (let i = 2; i <= 14; i++) {
    gameDeck.deck.push(new Card(i, `${i} of ${suit}`))
    }
})

gameDeck.shuffleDeck()
gameDeck.dealCards(player1, player2)
console.log(player1, player2)

while (player1.hand.length > 0) {
    let p1CurrentCard = player1.playCard()
    let p2CurrentCard = player2.playCard()
   console.log(p1CurrentCard, p2CurrentCard)
}

let p1CurrentCard = 0
let p2CurrentCard = 0

let player1Score = 0
let player2Score = 0

//below does not work as intended. I tried a million different ways and none of them worked.

if(p1CurrentCard < p2CurrentCard) {
   player2.addPoint()
    console.log(player2.score)
} else if (p1CurrentCard > p2CurrentCard) {
    addPoint(player1Score)
    console.log(player1Score)
} else if (p1CurrentCard == p2CurrentCard) {
    console.log("It's a tie!")
}

if(player1Score > player2Score) {
    console.log("Player 1 wins!")
} else if (player1Score < player2Score) {
    console.log("Player 2 wins!")
} else if (player1Score == player2Score) {
    console.log("It's a tie!")
}