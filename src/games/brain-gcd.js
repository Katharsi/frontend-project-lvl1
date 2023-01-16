import getRandomInRange from '../getRandomNumbers.js';
import runGame from '../index.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const calculateGcd = (num1, num2) => (num2 === 0 ? num1 : calculateGcd(num2, num1 % num2));

const getRoundsGame = () => {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
  const question = `${num1} ${num2}`;
  const correctAnswer = `${calculateGcd(num1, num2)}`;

  return [question, correctAnswer];
};

const startGame = () => runGame(descriptionGame, getRoundsGame);

export default startGame;
