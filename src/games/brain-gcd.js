import readlineSync from 'readline-sync';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const runGame = (descriptionGame, getRandomInt) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(descriptionGame);

const startGame = () => gameRounds(descriptionGame, getRandomInt);
startGame();

    const roundsCount = 3;
    for (let i = 0; i < roundsCount; i += 1) {
        const [question, correctAnswer] = getRandomInRange();
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
        if (answer !== correctAnswer) {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
            console.log(`Let's try again, ${userName}!`);
            return;
        } console.log('Correct!');
    } console.log(`Congratulations, ${userName}!`);
};

const gcd = (number1, number2) => {
    if (number2 === 0) {
      return number1;
    }
    return gcd(number2, number1 % number2);
};

const getNumber = () => {
    const randomNumber1 = getRandomInRange(1, 20);
    const randomNumber2 = getRandomInRange(1, 20);
    const randomOperation = `${randomNumber1} ${randomNumber2}`;
  
    return [randomOperation, String(gcd(randomNumber1, randomNumber2))];
};
  
export const startGame = () => gameRounds(descriptionGame, getNumber);

export default runGame;