let player1 = []
let player2 = []    
// create cards and values 
const warDeck = Array()
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']; 
const cardValue = ['Joker', 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const cardRank = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// function below is to assign cards with values and it uses a function to arrange deck, contains 2 "for" loops.
// first loop goes through the suits
// second loop goes through card values
// Lastly an action is invoked to assign values and suits to cards object.
function arrangeDeck() {
    
    for (let i = 0; i < suits.length; i++) {
        for (let z = 0; z < cardValue.length; z++)
        {
           const card = {
               Value: cardValue[z],
               Suit: suits[i],
               Rank: cardRank[z]
            };     
       warDeck.push(card);
     } 
    } 
    return warDeck;
}
arrangeDeck()


