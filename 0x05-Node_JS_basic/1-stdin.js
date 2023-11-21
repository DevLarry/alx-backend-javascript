const readline = require('readline');

console.log('Welcome to Holberton School, what is your name?');
process.on('exit', () => {
  console.log('This important software is now closing');
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});
// const yourName = process.stdin.read(100);
// console.log(`Your name is: ${yourName}`);
