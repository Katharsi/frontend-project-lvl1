#!/usr/bin/env node
import greetingUser from '../src/cli.js'

const welcome = () => {
    console.log('Welcome to the Brain Games!');
    greetingUser();
};

welcome();