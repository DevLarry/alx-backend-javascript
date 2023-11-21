const readline = require('readline');

// console.log('Welcome to Holberton School, what is your name?');
// process.on('exit', () => {
//   console.log('This important software is now closing');
// });

// const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  rl.close();
});

// const yourName = process.stdin.read(100);
// console.log(`Your name is: ${yourName}`);
