import readlineSync from 'readline-sync';

const descriptionGame = 'What number is missing in the progression?';

const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getProgression = (firstItem, step, Length) => {
    const array = [];
    for (let i = 0; i < Length; i += 1) {
      const result = (firstItem + (step * i));
      array.push(result);
    }
    return array;
};

const getRandomGame = () => {
    const first = getRandomInRange(1, 10);
    const step = getRandomInRange(1, 10);
    const length = getRandomInRange(5, 10);
    const progression = getProgression(first, step, length);
    const randomIndex = Math.floor(Math.random() * progression.length);
  
    const correctAnswer = `${progression[randomIndex]}`;
    progression[randomIndex] = '..';
    const question = progression.join(' ');
    return [question, correctAnswer];
  };

const runGame = (descriptionGame, getRandomInt) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(descriptionGame);

const startGame = () => gameRounds(descriptionGame, getRandomGame);
startGame();

    const roundsCount = 3;
    for (let i = 0; i < roundsCount; i += 1) {
        const [question, correctAnswer] = getRandomInt();
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer !== correctAnswer) {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
            console.log(`Let's try again, ${userName}!`);
            return;
        } console.log('Correct!');
    } console.log(`Congratulations, ${userName}!`);
};

export default runGame;