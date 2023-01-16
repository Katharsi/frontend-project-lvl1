import getRandomInRange from '../getRandomNumbers.js';
import runGame from '../index.js';

const descriptionGame = 'What is the result of the expression? ';
const operators = ['+', '-', '*'];

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      throw new Error('Error!');
  }
};

const getRoundsGame = () => {
  const num1 = getRandomInRange(1, 20);
  const num2 = getRandomInRange(1, 20);
  const operator = operators[getRandomInRange(0, (operators.length - 1))];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, operator, num2));
  return [question, correctAnswer];
};

const startGame = () => runGame(descriptionGame, getRoundsGame);

export default startGame;
