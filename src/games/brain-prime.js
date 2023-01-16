import getRandomInRange from '../getRandomNumbers.js';
import runGame from '../index.js'

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isPrime = (number) => {
    if (number < 2) {
      return false;
    }

    let i = 2;

    while (i < number / 2) {
      if (number % i === 0) {
        return false;
      }
      i += 1;
    }
    return true;
};

const getRoundsGame = () => {
    const question = getRandomInRange(2, 100);
    const correctAnswer = isPrime(question) ? "yes" : "no";

    return [question, correctAnswer];
};

const startGame = () => runGame(descriptionGame, getRoundsGame);

export default startGame;