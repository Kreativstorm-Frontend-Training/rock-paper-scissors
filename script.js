function Game() {
  let computerWins = 0;
  let playerWins = 0;
  const acceptedAnswers = ['rock', 'paper', 'scissors'];

  function generateAIRockPaperScissors() {
    const index = Math.floor(Math.random() * acceptedAnswers.length);
    return acceptedAnswers[index];
  }

  function checkingWinner(pChoice, AIChoice) {
    if (AIChoice === pChoice) {
      return 'Tie';
    } else if (
      (AIChoice === 'rock' && pChoice === 'paper') ||
      (AIChoice === 'paper' && pChoice === 'scissors') ||
      (AIChoice === 'scissors' && pChoice === 'rock')
    ) {
      return 'You won';
    } else {
      return 'You lost';
    }
  }

  function start() {
    for (let i = 0; i < 5; i++) {
      let playerChoice;

      do {
        playerChoice = prompt('Rock, Paper or Scissors?');
        playerChoice = playerChoice.toLowerCase();
      } while (!acceptedAnswers.includes(playerChoice));

      let computerChoice = generateAIRockPaperScissors();

      const roundResult = checkingWinner(playerChoice, computerChoice);

      if (roundResult === 'You won') {
        playerWins++;
      } else if (roundResult === 'You lost') {
        computerWins++;
      }

      console.log('computer-choice', computerChoice);

      console.log('player-choice', playerChoice);

      console.log('result', roundResult);

      console.log('------------------------------------------');
    }

    if (computerWins > playerWins) {
      console.log('END - Computer won');
    } else {
      console.log('END - You won- Congrats');
    }
  }

  return {
    start,
  };
}

const game = new Game();
game.start();
