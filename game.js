import { quiz } from './questions.js'


/*
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
});*/

//Etape 5

// Variables pour suivre l'état du quiz
let currentQuestionIndex = 0; // Commence à la première question

// Sélection des éléments HTML
const question = document.getElementById("question-text");
const optionsAnswers = document.getElementById("options-container");
const nextButton = document.getElementById('next-button');

// Fonction pour afficher une question basée sur l'index actuel
function loadQuestion() {


  // Vider le conteneur des options
  optionsAnswers.innerHTML = '';

  // Récupérer la question actuelle
  const currentQuestion = quiz.questions[currentQuestionIndex];

  // Injecter la question dans le HTML
  question.innerText = currentQuestion.text

  // Injecter les options dans le HTML 
  currentQuestion.choices.forEach(choice => {
  const answer_btn = document.createElement('button')
  answer_btn.innerText = choice;
  answer_btn.classList.add("options");
  optionsAnswers.appendChild(answer_btn);
  
})}

// Ajouter un écouteur d'événements pour le bouton "Suivant"

nextButton.addEventListener('click', () => {

  // Incrémenter l'index de la question
   currentQuestionIndex++

  // Vérifier s'il reste des questions
  if (currentQuestionIndex < quiz.questions.length){
     loadQuestion()
  } else {
    question.innerText = 'fin du quiz'
    optionsAnswers.innerHTML = ''
    nextButton.style.display = 'none'
  }

})

loadQuestion()