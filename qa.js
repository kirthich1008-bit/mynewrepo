
const readlineSync = require('readline-sync');
const userName = readlineSync.question('What is your name? ');
console.log(`Hello, ${userName}! Welcome to the Values and Data Types Quiz.\n`);


const answer1 = readlineSync.question('1. What is the data type of the value "true"? ');
const answer2 = readlineSync.questionInt('2. How many primitive data types are there in JavaScript? ');
const answer3 = readlineSync.question('3. What symbol is used for the "modulus" operator? ');
const answer4 = readlineSync.question('4. Which value represents "nothing" or "empty" in JavaScript? ');
const answer5 = readlineSync.question('5. What keyword is used to declare a variable that cannot be reassigned? ');

console.log('\n--- Your Quiz Summary ---');
console.log(`User Name: ${userName}`);
console.log(`Answer 1: ${answer1}`);
console.log(`Answer 2: ${answer2}`);
console.log(`Answer 3: ${answer3}`);
console.log(`Answer 4: ${answer4}`);
console.log(`Answer 5: ${answer5}`);