GuessingGame = function(){
        this.guess = '';
        this.message = '';
        this.answer = '';
        this.answer2 = '';

        this.getRandom = function(seed){
          return Math.floor(Math.random() * seed + 1);
        }
        this.getMessage = function(){
          if (this.guess != this.answer) {
            this.message = 'You got it wrong. shoot!, Better luck next time'
            alert(this.message);
            this.guess = prompt('Guess again with a smaller number range, 1 to 10')
            if (this.guess == this.answer2) {
              this.message ='You are amazing!'
              alert(this.message);
            }
            if (this.guess != this.answer2){
              this.message = "You are wrong again, but you are still amazing!"
                alert(this.message);
            }
          } else {
            this.message = 'You won the amazing prize of feeling great about guessing right!'
              alert(this.message);
          }
        }
        this.run = function(){
          this.answer = this.getRandom(100);
          console.log(this.answer);
          this.answer2 = this.getRandom(10);
          console.log(this.answer2);
          this.guess = prompt("I'm holding a random number raffle between 1 and 100. Give it your best guess!");
          this.getMessage();
        }
      }
      var guessingGame = new GuessingGame();
      guessingGame.run();
