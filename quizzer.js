var q1 = {
  question: 'What planet has humans?',
  answer: 'earth',
};

var q2 = {
  question: 'What is 13 times 3?',
  answer: '39',
};

var q3 = {
  question: 'Who was the first President in US?',
  answer: 'Geroge Washington',
};

var q4 = {
  question: 'What has an orbit of 27 days?',
  answer: 'moon',
};

var q5 = {
  question: "You're learning JavaScript, true or false?",
  answer: 'true',
};

var questions = [q1, q2, q3, q4, q5];
var score = 0;
var numQuestions = questions.length;

for (var i = 0; i < numQuestions; i++) {
  var index = Math.floor(Math.random() * questions.length);
  var pickedQuestion = questions[index];
  questions.splice(index, 1);
  var playerAnswer = prompt(pickedQuestion['question']);
  if (playerAnswer === pickedQuestion.answer) {
    alert('Correct!!');
    score++;
  } else {
    alert('No, the answer was ' + pickedQuestion.answer);
  }
}

var percent = (score / numQuestions) * 100;
alert(
  'Score: ' +
    score +
    ' Max Score ' +
    numQuestions +
    ' Percent Correct: ' +
    percent +
    '%'
);

if (percent > 65) {
  alert('Nice work!');
} else {
  alert('Keep trying');
}

var address = {
  street: '719 Beacon',
  city: 'Irvine',
  zip: '92618',
  announce: function () {
    alert('my address is ' + this.street);
  },
};

// var my_var = 'city';

// console.log(address[my_var]);

address.announce();
