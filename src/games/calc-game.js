import { getRandomInt } from '../random.js';
import greet from '../cli.js';
import play from '../index.js';


const generateCorrectAnswer = (question) => {
  const [x, operation, y] = question.split(' ');
  if (operation === '+') return Number(x) + y;
  if (operation === '-') return x - y;
  return x * y;
}

const generateOperation = () => {
  const operation = getRandomInt(1,3);
  if (operation === 1) return '+';
  if (operation === 2) return '-';
  return '*';
}

const generateQuestion = () => {
  const x = getRandomInt(1, 100);
  const y = getRandomInt(1, 100);
  const operation = generateOperation();
  return `${x} ${operation} ${y}`
}

export default () => {
  const name = greet();
  const rules = 'What is the result of the expression?';
  play(rules, generateQuestion, generateCorrectAnswer, name);
}