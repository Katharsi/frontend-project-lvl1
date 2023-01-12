import readlineSync from 'readline-sync';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

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

export const getRandomInt = () => {
    const randomNumber = getRandomInRange(1, 30);
    const correctAnswer = isEven(randomNumber) ? "yes" : "no";
    return [randomNumber, correctAnswer];
};

export const runGame = (descriptionGame, getRandomInt) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(descriptionGame);
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

const startGame = () => gameRounds(descriptionGame, getRandomInt);

export default startGame;