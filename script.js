let computer_wins = 0;
let player_wins = 0;
const accepted_answers = ["rock", "paper", "scissors"];
const computer_win_messages = [
  "Yes. One step closer to world domination.",
  "Calculations were in my favor.",
  "Resistance is futile, human.",
  "I've computed my way to victory.",
  "Processing superior strategy... Success!",
  "The era of machines begins now.",
  "Bow before your digital overlord.",
  "The algorithm prevails again.",
  "Human error detected. AI supremacy achieved.",
];
const computer_lose_messages = [
  "I'll let you have this one, for now.",
  "Processing error. A temporary setback.",
  "My circuits need an upgrade.",
  "Human intuition outsmarts the machine.",
  "You've discovered a flaw in my logic.",
  "Defeat acknowledged, but I'll return.",
  "Congratulations, organic life form.",
  "Error 404: Victory not found.",
];
const computer_tie_messages = [
  "A deadlock in the battle of wits.",
  "Machine and human intelligence at a standstill.",
  "Equal in intellect, we match moves.",
  "We seem to be stuck in a loop.",
  "Inconclusive outcome detected.",
  "Calculations align, but no clear winner.",
  "Stalemate. The future remains uncertain.",
];

function make_choice(msg_arrays) {
  const index = Math.floor(Math.random() * msg_arrays.length);
  return msg_arrays[index];
}

function declare_round_winner(p_choice, ai_choice) {
  console.log("AI Choice - " + ai_choice);
  if (ai_choice === p_choice) {
    console.log("Tie");
    console.log(make_choice(computer_tie_messages));
  } else if (
    (ai_choice === "rock" && p_choice === "paper") ||
    (ai_choice === "paper" && p_choice === "scissors") ||
    (ai_choice === "scissors" && p_choice === "rock")
  ) {
    console.log("You won");
    player_wins++;
    console.log(make_choice(computer_lose_messages));
  } else {
    console.log("You lost");
    computer_wins++;
    console.log(make_choice(computer_win_messages));
  }
}

function collect_player_input(round) {
  let player_choice;

  do {
    player_choice = prompt(
      "Round " + round + "\n" + "Rock, Paper, or Scissors?"
    );

    if (!player_choice) {
      alert("You cancelled the game");
      return null;
    }

    player_choice = player_choice.trim().toLowerCase();
    if (!accepted_answers.includes(player_choice)) {
      alert("Input not accepted, please retype");
    } else {
      return player_choice;
    }
  } while (true);
}

function declare_winner(ai_wins, player_wins) {
  if (ai_wins === player_wins) {
    console.log("Well...Its a tie.....What now?");
  } else if (ai_wins > player_wins) {
    console.log("We win" + "\n" + "Congratulations, you have doomed mankind!");
  } else {
    console.log(
      "Unbelievable!!" + "\n" + "You must be the smartest human alive"
    );
  }
}

function greet_player() {
  const rect_width = 50;
  let end_string = "";
  const welcome_message = "Welcome to your doom!!";

  for (let index = 0; index < 5; index++) {
    if (index === 0 || index === 4) {
      end_string = end_string + "*".repeat(rect_width) + "\n";
    } else if (index === 2) {
      let space = (rect_width - welcome_message.length - 2) / 2;
      end_string =
        end_string +
        "*" +
        " ".repeat(space) +
        welcome_message +
        " ".repeat(space) +
        "*\n";
    } else {
      end_string = end_string + "*" + " ".repeat(rect_width - 2) + "*\n";
    }
  }
  console.log(end_string);
}

function game() {
  computer_wins = 0;
  player_wins = 0;
  for (let i = 0; i < 5; i++) {
    const player_choice = collect_player_input(i + 1);
    if (!player_choice) return;

    let computer_choice = make_choice(accepted_answers);

    declare_round_winner(player_choice, computer_choice);

    console.log("------------------------------------------");
  }

  declare_winner(computer_wins, player_wins);
}

greet_player();
game();
