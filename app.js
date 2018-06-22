
console.log('hello');

const player = {
  hand:[],
}

const computerPlayer = {
  hand:[],
}

const game = {
  lib: [
    {name: "Bulbasaur", damage:60},
    {name: "Caterpie", damage:40},
    {name: "Charmander", damage:60},
    {name: "Clefairy", damage:50},
    {name: "Jigglypuff", damage:60},
    {name: "Mankey", damage:30},
    {name: "Meowth", damage:60},
    {name: "Nidoran - female", damage:60},
    {name: "Nidoran - male", damage:50},
    {name: "Oddish", damage:40},
    {name: "Pidgey", damage:50},
    {name: "Pikachu", damage:50},
    {name: "Poliwag", damage:50},
    {name: "Psyduck", damage:60},
    {name: "Rattata", damage:30},
    {name: "Squirtle", damage:60},
    {name: "Vulpix", damage:50},
    {name: "Weedle", damage:40},
    ],
  cardsPlayed: [],
  computerPoints: 0,
  playerPoints: 0,
  currentRound: 1,
  roundsWonByPlayer: 0,
  roundsWonByComputer: 0,
  roundsTie: 0,

  deal() {
    let randomIndex = Math.floor(Math.random() * this.lib.length);
    let dealtCard = this.lib.splice(randomIndex, 1);
    return dealtCard[0];
  },
  dealCards(){
    for (let i = 0; i < 3; i++) {
      let playerCard = this.deal();
      let computerCard = this.deal();

      player.hand.push(playerCard);
      computerPlayer.hand.push(computerCard);
      this.cardsPlayed.push(playerCard, computerCard);
    }

},


battle() {
  let computerCard = computerPlayer.hand.splice(0,1)[0];
  console.log(`computer chose ${JSON.stringify(computerCard)}`)

  let playerCard = this.chooseACard();
  console.log(`you chose ${JSON.stringify(playerCard)}`)

  if(playerCard.damage > computerCard.damage) {
    console.log('you won');
    this.playerPoints++;
    console.log(`you now have ${this.playerPoints}`);


  } else if (playerCard.damage < computerCard.damage) {
    console.log('you lost...')
    this.computerPoints++
    console.log(`computer now has ${this.computerPoints}`)
  } else if (playerCard.damage == computerCard.damage) {
    console.log('no winner.. tie.');
  }
},


chooseACard(){
  let validChoice = false;
  let playerChoiceIndex = 0;

  while(validChoice == false){
    let playerChoice = prompt(`your hand is ${JSON.stringify(player.hand)} which do you choose?`);
        playerChoice = playerChoice.toLowerCase();


    for (let i = 0; i < player.hand.length; i++) {
      if(playerChoice == player.hand[i].name.toLowerCase()) {
        playerChoiceIndex = i;
        validChoice = true;
          }
        }
      }

    let playerCard = player.hand.splice(playerChoiceIndex,1)[0];
    return playerCard;
    },


playRound() {
  console.log(`round ${this.currentRound} beings`)
  this.dealCards();
  this.battle();
  this.battle();
  this.battle();
  this.endRound();

},


endRound(){
  console.log('round is ending')
  console.log(`the player has ${this.playerPoints}`);
  console.log(`computer has ${this.computerPoints}`);
  if(this.playerPoints > this.computerPoints) {
    this.roundsWonByPlayer++;
        console.log('YOU HAS WON THIS ROUND');
  } else if (this.computerPoints > this.playerPoints) {
    this.roundsWonByComputer++;
    console.log('COMPUTER HAS WON THIS ROUND');
  } else if (this.computerPoints == this.playerPoints) {
    this.roundsTie++;
    console.log('this was a tie.');
  }
this.playerPoints = 0;
this.computerPoints= 0;
this.currentRound++;
},




playGame(){
  alert("the game is starting");


for (let i = 0; i < this.lib.length; i++) {
  if(this.lib.length > 5) {
    this.playRound();
  } else if (this.lib.length < 5) {
    endRound();
    console.log('this game is OVER');
      }
    }

  }
};



game.playGame()
