import readlineSync from 'readline-sync';

const greetingUser = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
};

export default greetingUser;
