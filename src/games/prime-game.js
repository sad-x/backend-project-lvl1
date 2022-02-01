import { getRandomInt } from '../random.js';
import greet from '../cli.js';
import play from '../index.js';


const generateCorrectAnswer = (question) => {
  if(isPrime(question)) return 'yes';
  return 'no';
}

const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

const generateQuestion = () => {
  return getRandomInt(1, 100);
}

export default () => {
  const name = greet();
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  play(rules, generateQuestion, generateCorrectAnswer, name);
}