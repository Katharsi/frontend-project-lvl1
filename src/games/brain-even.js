import getRandomInRange from '../getRandomNumbers.js';
import runGame from '../index.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRoundsGame = () => {
  const randomNumber = getRandomInRange(1, 30);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

const startGame = () => runGame(descriptionGame, getRoundsGame);

export default startGame;
