import { getRandomInt } from '../random.js';
import greet from '../cli.js';
import play from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) { if (num % i === 0) return false; }
  return num > 1;
};
const generateCorrectAnswer = (question) => {
  if (isPrime(question)) return 'yes';
  return 'no';
};

const generateQuestion = () => getRandomInt(1, 100);

export default () => {
  const name = greet();
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  play(rules, generateQuestion, generateCorrectAnswer, name);
};
