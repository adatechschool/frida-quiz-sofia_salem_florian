import { quiz } from './questions.js'

const question = document.getElementById("question-text");
const options = document.getElementById("options-container");

// Récupérer la première question
const firstQuestion = quiz.questions[0];

// Injecter le texte de la question dans l'emplacement dédié
question.innerText = firstQuestion.text

// Pour chaque option, créer un bouton et l'ajouter au conteneur
firstQuestion.choices.forEach(choice => {
  const answer_btn = document.createElement('button');
  answer_btn.innerText = choice;
//   console.log(choice)
  answer_btn.classList.add("options");
  //console.log(options.classList.add(choice))
  options.appendChild(answer_btn);
});
