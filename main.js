const questionInput = document.getElementById('question')
const submitButton = document.getElementById('submit')
const answerElement = document.getElementById('answer')

const getAnswer = () => {
  const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Reply hazy, try again.",
    "Don't count on it.",
    "As I see it, yes.",
    "Most likely.",
    "Ask again later.",
    "My reply is no.",
    "Without a doubt.",
    "Yes.",
    "Better not tell you now.",
    "My sources say no.",
    "Yes, definitely.",
    "Outlook good.",
    "Cannot predict right now.",
    "Outlook not so good.",
    "You may rely on it.",
    "Signs point to yes.",
    "Concentrate and ask again.",
    "Very doubtful.",
  ];
  const index = Math.floor(Math.random() * answers.length);
  return answers[index];
};
console.log(getAnswer());


const getQuestion = () => {
    const question = questionInput.value 
    const answer = getAnswer()
    answerElement.textContent = `Answer: ${answer}`
    // questionInput.value = ''
}

