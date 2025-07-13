function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(arr) {
  return arr[getRandomInt(0, arr.length - 1)];
}

const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];

const randomColor = getRandomElement(colors);
const randomAnimal = getRandomElement(animals);

console.log(`A ${randomColor} ${randomAnimal} appears!`);
