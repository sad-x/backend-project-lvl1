import { getRandomInt } from '../random.js';
import greet from '../cli.js';
import play from '../index.js';


const generateCorrectAnswer = (question) => {
  const arr = question.split(' ');
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] == '..') {
      return Number(arr[0]) + i * (arr[arr.length - 1] - arr[0]) / (arr.length - 1);
    } 
  }
}


const generateQuestion = () => {
  const question = [];
  const number = getRandomInt(6, 10);
  const start = getRandomInt(1, 100);
  const plus = getRandomInt(2, 5);
  const position = getRandomInt(1, number - 2);
  for (let i = 0; i < number; i += 1) {
    if (i === position) {
      question.push('..');
      continue;
    }
    question.push(start + (i * plus));
  }
  return question.join(' ');
}

export default () => {
  const name = greet();
  const rules = 'What number is missing in the progression?';
  play(rules, generateQuestion, generateCorrectAnswer, name);
}