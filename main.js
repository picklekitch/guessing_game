var GuessingGame = function() {
  this.user = '';
  this.computer = '';
  this.answer = '';
  this.playing = true;
  this.rounds = 3;
  this.userScore = 0;
  this.compScore = 0;
  this.upgradeGame = function() {
  while(this.rounds){

    this.user = prompt('rock, paper, or scissors?');
    // Here we are generating a random number betwen 1 and 100 and then assigning that value to the answer variable
    this.user = this.user.toUpperCase();
    this.answer = Math.floor(Math.random() * 100 + 1);
    if(this.answer < 33){
      this.computer = "ROCK";
    }
    if(this.answer >= 33 && this.answer <= 66){
      this.computer = "PAPER";
    }
    if(this.answer > 66){
      this.computer = "SCISSORS";
    }
    console.log(this.answer + ' is a random nuber 1-100 for decision use');
    console.log('The computer threw ' + this.computer);
    console.log('User threw ' + this.user);
    if(this.user === this.computer){
      alert('You and the computer both chose ' + this.user + '. There are no ties in life; you both lose!');
    } else {
      if ((this.user === 'ROCK' && this.computer === 'PAPER')||(this.user === 'PAPER' && this.computer === 'SCISSORS')||(this.user === 'SCISSORS' && this.computer === 'ROCK')) {
        alert('You chose ' + this.user + ' and the computer chose ' + this.computer + '. ' + this.computer + ' beats ' + this.user + '. Game over, bro. You lose.');
        this.compScore++;
        console.log(this.compScore);
        this.rounds--;
      }
      if ((this.user === 'ROCK' && this.computer === 'SCISSORS')||(this.user === 'PAPER' && this.computer === 'ROCK')||(this.user === 'PAPER' && this.computer === 'ROCK')) {
        alert("You chose " + this.user + " and the computer chose " + this.computer + ". " + this.user + " beats " + this.computer + ". You have defeated the computer. Game over, computer.");
        this.userScore++;
        console.log(this.userScore);
        this.rounds--;
      }
      alert("The score is: You: " + this.userScore + ", Computer: " + this.compScore);
    }
  }
  var uScore = document.getElementById('userScore');
      uScore.innerHTML = "The user score is: " + this.userScore;
  var cScore = document.getElementById('compScore');
      cScore.innerHTML = "The computer score is: " + this.compScore;
  }
}
var guessingGame = new GuessingGame();
