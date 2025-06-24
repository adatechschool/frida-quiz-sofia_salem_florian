import { quiz } from './questions.js'

// Récupérer la première question
// const firstQuestion = quiz.questions[0];

// Injecter le texte de la question dans l'emplacement dédié
// question.innerText = firstQuestion.text

// Pour chaque option, créer un bouton et l'ajouter au conteneur
// firstQuestion.choices.forEach(choice => {
//   const answer_btn = document.createElement('button');
//   answer_btn.innerText = choice;
// //   console.log(choice)
//   answer_btn.classList.add("options");
//   //console.log(options.classList.add(choice))
//   options.appendChild(answer_btn);
// });

let currentQuestionIndex = 0;

const question = document.getElementById("question-text");
const optionsAnswers = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const replayButton = document.getElementById("replay-button");

console.log(question);
console.log(nextButton);
console.log(currentQuestionIndex);
console.log(replayButton);

function loadQuestion() {
  optionsAnswers.innerHTML = '';

  
  
  //console.log(loadQuestion);
  const currentQuestion = quiz.questions[currentQuestionIndex];
  console.log(currentQuestion);
  
  question.innerText = currentQuestion.text
  console.log(currentQuestion)

  // Injecter les options dans le HTML 
  currentQuestion.choices.forEach(choice => {
  const answer_btn = document.createElement('button');
  answer_btn.innerText = choice;
  answer_btn.classList.add('options');
  optionsAnswers.appendChild(answer_btn);
  });
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex ++
  if (currentQuestionIndex < quiz.questions.length) {
    loadQuestion();
  } else {
    question.innerText = "Le quiz est terminé !";
    replayButton.classList.add("button-container");
    optionsAnswers.innerHTML = '';
    nextButton.style.display = "none";
    replayButton.style.display = "block";
  }
})

loadQuestion()

