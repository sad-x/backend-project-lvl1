import readlineSync from 'readline-sync';
import { getRandomInt } from './random.js';

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  let win = true;
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt(1, 100);
    console.log(`Question: ${num}`)
    const input = readlineSync.question('Your answer: ');
    if (num % 2 === 0 && input === 'yes') console.log('Correct!');
    else if (num % 2 !== 0 && input === 'no') console.log('Correct!');
    else {
      if (num % 2 === 0) console.log(`'${input}' is wrong answer ;(. Correct answer was 'yes'.`)
      else console.log(`'${input}' is wrong answer ;(. Correct answer was 'no'.`)
      console.log(`Let's try again, ${name}!`)
      win = false;
      break;
    }
  }
  if (win) console.log(`Congratulations, ${name}!`);
}

