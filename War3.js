// class Deck {
//     constructor() {
//       this.deck = [];
//       this.player1 = [];
//       this.player2 = [];
//       this.shuffle()
  
//       const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
//       const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
//       for (let suit in suits) {
//         for (let value in values) {
//           this.deck.push(`${values[value]} of ${suits[suit]}`);
//         }
//       }
//     }
//       shuffle() {
//       const { deck } = this;
//       let m = deck.length, i;
  
//       while (m) {
//         i = Math.floor(Math.random() * m--);
  
//         [deck[m], deck[i]] = [deck[i], deck[m]];
//       }
  
//       return this;
//       }
    
//     deal() {
//       this.player1 = this.deck.slice(0,26)
//       this.player2 = this.deck.slice(26,52)
  
//       return this.player1, this.player2
//     }

//     play() {
//         this.player1 = Math.floor(Math.random() * this.player1--);
//         this.player2 = Math.floor(Math.random() * this.player2--);
//         if(this.player1 > this.player2) {
//           console.log("Player 1 is the winner!");
//         } else if (this.player1 < this.player2) {
//           console.log("Player 2 is the winner!");
//          }
//       }
//   //Play function logic
  
//   //Each player shoud play a card
//   // ?? how to make players play cards:
//     // Possibly use 
//         //push- puts new variable into array 
//         //or pop
  
//   //Higher Card wins

//   //if tie, players play 4 cards, highest card wins

//   //
  
//   }
  
  
//   const deck1 = new Deck();
//   deck1.shuffle()
//   deck1.deal()
  

// //   console.log(deck1.deck.length);
// // console.log(deck1.player1);
// // console.log(deck1.player2);