
import { getRandomInt } from '../random.js';
import greet from '../cli.js';
import play from '../index.js';


const generateCorrectAnswer = (num) => {
  if (num % 2 === 0) return 'yes';
  return 'no';
}

const generateQuestion = () => getRandomInt(1, 100);

export default () => {
  const name = greet();
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  play(rules, generateQuestion, generateCorrectAnswer, name);
}

