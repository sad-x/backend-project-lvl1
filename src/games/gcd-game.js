/* eslint-disable no-param-reassign */
import { getRandomInt } from '../random.js';
import greet from '../cli.js';
import play from '../index.js';

const gcd = (x, y) => {
  while (x !== 0 && y !== 0) {
    if (x > y) x %= y;
    else y %= x;
  }
  return Number(x) + Number(y);
};

const generateCorrectAnswer = (question) => {
  const [x, y] = question.split(' ');
  return gcd(x, y);
};

const generateQuestion = () => {
  const x = getRandomInt(1, 100);
  const y = getRandomInt(1, 100);
  return `${x} ${y}`;
};

export default () => {
  const name = greet();
  const rules = 'Find the greatest common divisor of given numbers.';
  play(rules, generateQuestion, generateCorrectAnswer, name);
};
