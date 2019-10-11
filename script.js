let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const game = document.querySelector('.game');
const result = [];
let counter;

numbers = shuffleArray(numbers);


initializeGame();
document.querySelector('.js-startBtn').addEventListener('click', initializeGame);

                                                        
document.onclick = function(event) {
  event.preventDefault();
  let currentNumber = event.target.dataset.number;
  
  if (!event.target.dataset.hasOwnProperty('number')) return false;
  
  if (~result.indexOf(currentNumber)) return false; // If element already exist (~ is equal to != -1)
  
  if (counter !== +currentNumber) return false;
  counter++;
  result.push(currentNumber);
  event.target.classList.add('active');
  
  if (result.length === numbers.length) finishGame();
}
                                                        
                                                        
function initializeGame() {
  game.innerHTML = null;
  counter = 1;
  result.length = 0;
  numbers = shuffleArray(numbers);
  createGrid();
}

function finishGame() {
  alert('Game has been finished');
  initializeGame();
}

function createGrid() {
  const grid = document.createElement('div');
  grid.classList.add('grid');
  
  numbers.forEach((cell) => {
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    gridCell.dataset.number = cell;
    gridCell.style.color = getRandomColor();
	
	if(cell % 3 === 0 && cell % 2 !== 0) gridCell.style.fontSize = '10px';
    if(cell % 2 === 0 && cell % 3 !== 0) gridCell.style.fontSize = '24px';
	
    gridCell.appendChild(document.createTextNode(cell));
    grid.appendChild(gridCell);
  });
  
  
  game.appendChild(grid);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}