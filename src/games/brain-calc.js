import readlineSync from 'readline-sync';

const descriptionGame = 'What is the result of the expression? ';

const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

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

const playGame = () => {
    const operations = ['+', '-', '*'];
    const num1 = getRandomInRange(1, 20);
    const num2 = getRandomInRange(1, 20);
    const operator = operations[getRandomInRange(0, (operations.length - 1))];
    const question = `${num1} ${operator} ${num2}`;
    const correctAnswer = String(calculate(num1, operator, num2));
    return [question, correctAnswer];
};

const runGame = (descriptionGame, getRandomInt) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(descriptionGame);

const startGame = () => gameRounds(descriptionGame, playGame);
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
