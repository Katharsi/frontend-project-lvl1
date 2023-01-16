#!/usr/bin/env node
import playerName from '../src/cli.js';

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  playerName();
};

greetingUser();
