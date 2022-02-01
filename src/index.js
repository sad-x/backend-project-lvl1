import readlineSync from 'readline-sync';

const round = (generateQuestion, generateCorrectAnswer) => {
  const question = generateQuestion();
  const correctAnswer = generateCorrectAnswer(question);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer ');
  // eslint-disable-next-line eqeqeq
  if (userAnswer != correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const play = (rules, generateQuestion, generateCorrectAnswer, name) => {
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    if (!round(generateQuestion, generateCorrectAnswer)) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default play;
