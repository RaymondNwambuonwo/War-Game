
//  class Card {
//     constructor(suit, rank, score) {
//         this.suit = suit;
//         this.rank = rank;
//         this.score = score;
//         }
//     }

// class Deck {
//  constructor () {
//    this.length = 52;
//    this.cards = [];
//  } 
//  create() {
//    let suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
//    let rank = [ 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//    let score = 0;
//    for (let i = 0; i < suit.length; i++) {
//      for (let z = 0; z < rank.length; z++){
//        switch (rank[z]) {
//          case 'Jack': 
//                score = 11;
//                break;
//          case 'Ace':
//                score = 1;
//                break;
//          case 'Queen':
//                score = 12;
//                break;
//          case 'King': 
//                score = 13;
//                break;
//          default: 
//          score = parseInt(rank[z]); 
//        }
//        this.cards.push(new Card(suit[i], rank[z], score))
//      }
//    }
//  }
// }
// const d = new Deck()
// d.create()


// let player1 = d.cards.slice(0,26)
// let player2 = d.cards.slice(26,52)
// console.log(player1)
// console.log(player2)