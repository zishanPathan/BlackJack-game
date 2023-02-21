let player={
    name:"zishan",
    chips:"$145"
}
let cards = []
let sum = 0
let thirdCard = getRandomCard()
let hasBlackJack = false
let isAlive = false
let massage = " "
let msg = document.getElementById("massege-el")
let sumEl = document.getElementById("sum-el")  
let cardEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +" :"+player.chips
function getRandomCard(){
let randomNumber = Math.floor( Math.random() * 13 ) + 1

if(randomNumber > 10){
    return 10
}
else if(randomNumber==1){
    return 11
} 
return randomNumber
}
function startGame(){ 
   
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard,secondCard)
    sum = firstCard+secondCard
   renderGame()
}
function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length;i++){
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: "+ sum
    if(sum <= 20){
        massage = "do you want to draw a new card"
        isAlive= true        
    }
    else if(sum === 21){
        massage = "you'r win black jack"
        hasBlackJack = true
    }
    else{    
        massage = "you lose the game"
    }
    msg.textContent=massage
 }
function newCard(){
    if(isAlive == true && hasBlackJack == false){
    let card = getRandomCard()
    sum += card
        cards.push(card)
    renderGame()
    }
}


