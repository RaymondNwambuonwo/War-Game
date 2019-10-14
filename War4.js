class Deck {
    constructor() {
      this.deck = [];
      this.player1 = [];
      this.player2 = [];
      this.shuffle()
  
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
      for (let suit in suits) {
        for (let value in values) {
          this.deck.push(`${values[value]} of ${suits[suit]}`);
        }
      }
    }
      shuffle() {
      const { deck } = this;
      let m = deck.length, i;
  
      while (m) {
        i = Math.floor(Math.random() * m--);
  
        [deck[m], deck[i]] = [deck[i], deck[m]];
      }
  
      return this;
      }
    
    deal() {
      this.player1 = this.deck.slice(0,26)
      this.player2 = this.deck.slice(26,52)
  
      return this.player1, this.player2
    }
    playWar() {
        deck1.length = 52;
        while (deck1.length > 0){
        let playCard1 = this.player1.shift()
              console.log(playCard1)
              let playCard2 = this.player2.shift()
              console.log(playCard2)
              if (playCard1 > playCard2){
                  this.player1.push(playCard1, playCard2)
                  console.log ('Player 1 the real winner!')
              }
              else if (playCard2 > playCard1) {
                  this.player2.push(playCard1, playCard2)
                  console.log ('Player 2 wins!')
              }
              else {
                  console.log ('WAR IS COMING!')
              }
              deck1.length--;
          }
      }
      endGame() {
          if (deck1.player1.length > deck1.player2.length) {
              console.log(`Player 1 got ${deck1.player1.length} cards, and player 2 has ${deck1.player2.length} cards`)
              console.log('Player 1 went crazy on player 2 OMG!')
          }
          else {
              console.log(`Player 2 got ${deck1.player2.length} cards, and player 1 has ${deck1.player1.length} cards`)
              console.log('Player 2 came back with a vengance on player 1!')
          }
      }
    }
  
  
  const deck1 = new Deck();
  
  deck1.shuffle();
  deck1.deal();
  deck1.playWar();
  deck1.endGame();