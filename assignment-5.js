let number = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
let suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
let cardDeck = [number, suit];

for (let i = 0; i < suit.length; i++) {
  for (let j = 0; j < number.length; j++) {
    console.log(cardDeck[0][j] + ' of ' + cardDeck[1][i]);
  }
}
