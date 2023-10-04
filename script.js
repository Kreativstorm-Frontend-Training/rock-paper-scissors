function game() {
    let computer_wins = 0;
    let player_wins = 0;
    const accepted_answers = ['rock', 'paper', 'scissors'];
    const computer_win_messages = [
      "Yes. One step closer to world domination.",
      "Calculations were in my favor.",
      "Resistance is futile, human.",
      "I've computed my way to victory.",
      "Processing superior strategy... Success!",
      "The era of machines begins now.",
      "Bow before your digital overlord.",
      "The algorithm prevails again.",
      "Human error detected. AI supremacy achieved."
    ];
    const computer_lose_messages = [
      "I'll let you have this one, for now.",
      "Processing error. A temporary setback.",
      "My circuits need an upgrade.",
      "Human intuition outsmarts the machine.",
      "You've discovered a flaw in my logic.",
      "Defeat acknowledged, but I'll return.",
      "Congratulations, organic life form.",
      "Error 404: Victory not found."
    ]
    const computer_tie_messages = [
      "A deadlock in the battle of wits.",
      "Machine and human intelligence at a standstill.",
      "Equal in intellect, we match moves.",
      "We seem to be stuck in a loop.",
      "Inconclusive outcome detected.",
      "Calculations align, but no clear winner.",
      "Stalemate. The future remains uncertain."
    ]
  
    function make_choice(msg_arrays) {
      const index = Math.floor(Math.random() * msg_arrays.length);
      return msg_arrays[index];
    }
  
    function checking_winner(p_choice, ai_choice) {
      if (ai_choice === p_choice) {
        return 'Tie';
      } else if (
        (ai_choice === 'rock' && p_choice === 'paper') ||
        (ai_choice === 'paper' && p_choice === 'scissors') ||
        (ai_choice === 'scissors' && p_choice === 'rock')
      ) {
        return 'You won';
      } else {
        return 'You lost';
      }
    }
  
    function start() {
      for (let i = 0; i < 5; i++) {
        let player_choice;
  
        do {
          player_choice = prompt('Round ' + (i + 1) + '\n' + 'Rock, Paper, or Scissors?');
          player_choice = player_choice.trim().toLowerCase();
        } while (!accepted_answers.includes(player_choice));
  
        let computer_choice = make_choice(accepted_answers);
  
        const round_result = checking_winner(player_choice, computer_choice);
  
        console.log('AI Choice - ' + computer_choice);
        console.log(round_result);
        if (round_result === 'You won') {
          player_wins++;
          console.log(make_choice(computer_lose_messages));
      } else if (round_result === 'You lost') {
          computer_wins++;
          console.log(make_choice(computer_win_messages));
        } else {
          console.log(make_choice(computer_tie_messages));
        }
  
        console.log('------------------------------------------');
      }
  
      if(computer_wins === player_wins){
          console.log('Well........What now?');
      } else if (computer_wins > player_wins) {
        console.log('We win' + '\n' + 'Congratulations, you have doomed mankind!');
      } else {
        console.log('Unbelievable!!' +'\n' + 'You must be the smartest human alive');
      }
    }
  
    function greet_player() {
      const rect_width = 50;
      let end_string = "";
      const welcome_message = "Welcome to your doom!!"
  
      for (let index = 0; index < 5; index++) {
          if(index === 0 || index === 4){
              end_string = end_string + '*'.repeat(rect_width) + "\n"
          } else if(index === 2){
              let space = (rect_width - welcome_message.length - 2) / 2;
              end_string = end_string + "*" + " ".repeat(space) + welcome_message + " ".repeat(space) + "*\n"
          }
          else{
              end_string = end_string + "*" + ' '.repeat(rect_width - 2) + "*\n"
          }
          
      }
      console.log(end_string);
  }
  
    return {
      start,
      greet_player
    };
}
  
const my_game = game();

my_game.greet_player();
my_game.start();
  