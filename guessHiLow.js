var ranNumber = Math.floor(Math.random() * 100 + 1);
var guess = '';
while (guess != ranNumber) {
  guess = prompt('Guess a number between 1 and 100: ');

  if (guess > ranNumber) alert(`you entered ${guess} but too high`);
  else if (guess < ranNumber) alert(`you entered: ${guess} but too low`);
  else alert('You are correct!! You won!!!');
}

// improvement point:
// 1. number of guess
// 2. ask your name on prompt and print "name wins! " 
// on the screen 100 times, using document.write after you win
// This is test again
// This is test2
// this is test3
