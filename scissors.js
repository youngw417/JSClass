var rounds = prompt(
  'How many rounds of rock, paper, scissors do you wnat to play?'
);
// this is test
var wins = 0;
var loses = 0;
var draws = 0;

for (var i = 0; i < rounds; i++) {
  var computerMove;
  var comChoice = Math.floor(Math.random() * 3);

  if (comChoice === 0) {
    computerMove = 'r'; // rock
  } else if (comChoice === 1) {
    computerMove = 'p'; //paper
  } else {
    computerMove = 's'; // scissors
  }

  var playerChoice = prompt('Choose rock, paper, or scissors.');
  var playerMove = playerChoice[0].toLowerCase();
  if (playerMove === computerMove) {
    alert("It's a draw");
  } else if (playerMove === 'r') {
    if (computerMove === 'p') {
      alert('Computer picked paper. You lose.');
      loses++;
    } else if (computerMove === 's') {
      alert('Computer picked scissors. You win');
      wins++;
    }
  } else if (playerMove === 'p') {
    if (computerMove === 's') {
      alert('Computer picked scissors. You lose.');
      loses++;
    } else if (computerMove === 'r') {
      alert('Computer picked rock. You win');
      wins++;
    }
  } else if (playerMove === 's') {
    if (computerMove === 'r') {
      alert('Computer picked rock. You lose.');
      loses++;
    } else if (computerMove === 'p') {
      alert('Computer picked paper. You win');
      wins++;
    }
  }
}
alert(
  'You had ' + wins + ' wins, ' + loses + ' loses, and ' + draws + ' draws.'
);

if (wins > loses) {
  alert('You win!');
} else if (wins < loses) {
  alert('you lose!');
} else {
  alert("It's a draw!");
}
