import getRandomInRange from '../getRandomNumbers.js';
import runGame from '../index.js';

const descriptionGame = 'What number is missing in the progression?';
const progressionLength = 20;

const getProgression = (start, diff, length) => {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    const result = (start + (diff * i));
    array.push(result);
  }
  return array;
};

const getRoundsGame = () => {
  const start = getRandomInRange(1, 20);
  const diff = getRandomInRange(1, 20);
  const missingElement = getRandomInRange(1, progressionLength - 1);
  const progression = getProgression(start, diff, progressionLength);
  const correctAnswer = `${progression.splice(missingElement, 1, '..')}`;
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startGame = () => runGame(descriptionGame, getRoundsGame);

export default startGame;
