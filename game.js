import { quiz } from './questions.js'

const question = document.getElementById("question-text");
const options = document.getElementById("options-container");

const firstQuestion = quiz.questions[0];

question.innerText = firstQuestion.text