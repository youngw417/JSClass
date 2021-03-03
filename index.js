function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function myEmoji(num) {
  var item = '';
  for (var i = 0; i < num; i++) {
    item += '🍎';
  }
  return item;
}

function othername() {
  var inputEle = document.getElementById('userInput');
  var input = inputEle.value;
  var myint = parseInt(input);
  var mydoc = document.querySelector('.answer');
  var mynode = document.createElement('div');
  for (var i = 0; i <= myint; i++) {
    var myitem = mydoc.appendChild(document.createElement('div'));
    myitem.style.color = getRandomColor();
    myitem.style.fontSize = '30px';
    var showEmoji = myEmoji(i);
    myitem.textContent = showEmoji;
    inputEle.value = '';
  }

  // alert(input);
  // document.write(`<h1>My name is ${input}</h1>`);

  console.log(input);

  // document.querySelector('.answer').textContent = input;
  // document.write(`<h1>My name is ${input}</h1>`);
}
