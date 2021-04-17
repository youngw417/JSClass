const firstElement = document.getElementById('firstH1');
const h2selected = document.querySelector('h2');
const h3selected = document.querySelector('h3');
const h4selected = document.querySelector('h4');
firstElement.addEventListener('mouseover', () => {
  h2selected.style.color = 'red';
  h3selected.style.color = 'blue';
  h4selected.innerHTML = 'Hula...';
  // console.log('Hello');
});
firstElement.addEventListener('mouseout', () => {
  h2selected.style.color = 'black';
  h3selected.style.color = 'black';
  h4selected.innerHTML = 'Hello World';
  // console.log('Hello');
});
