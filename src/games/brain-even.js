import readlineSync from 'readline-sync';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomInt = () => {
    const randomNumber = getRandomInRange(1, 30);
    const correctAnswer = isEven(randomNumber) ? "yes" : "no";
    return [randomNumber, correctAnswer];
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
