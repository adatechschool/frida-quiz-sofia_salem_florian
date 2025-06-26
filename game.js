// On importe les questions depuis un autre fichier (questions2.js) pour pouvoir les utiliser ici
import { quiz } from './questions.js'


/*
const firstQuestion = quiz.questions[0];

question.innerText = firstQuestion.text

firstQuestion.choices.forEach(choice => {
  const answer_btn = document.createElement('button');
  answer_btn.innerText = choice;
  answer_btn.classList.add("options");
  options.appendChild(answer_btn);
});

*/

//Etape 5

// &Variable  
let currentQuestionIndex = 0; //On commence à 0 (la première question)
let score = 0;
let compteur = 10

// &tous les éléments HTML
const question = document.getElementById("question-text");//*question
const optionsAnswers = document.getElementById("options-container");//*les boutons de réponse
const nextButton = document.getElementById('next-button');//*le bouton suivant
const replayButton = document.getElementById('replay-button')//*le bouton rejouer (qui est caché voir html)
const affichageScore = document.getElementById('affiche-score')//* le score
const affichageTimer = document.getElementById('affiche-timer')//* le timer



// &Fonction qui affiche une question 
function loadQuestion() {

	// *On vide les anciennes réponses (si on est à la 2e ou 3e question par exemple)
	optionsAnswers.innerHTML = '';
	affichageScore.innerText = `Score ${score}/${quiz.questions.length}`
	// *On récupère la question actuelle à partir de l'index
	const currentQuestion = quiz.questions[currentQuestionIndex];

	// *On affiche le texte de la question dans le HTML
	question.innerText = currentQuestion.text;

	// On désactive le bouton "Suivant" tant qu'aucune réponse n’est cliquée
	nextButton.disabled = true;

	//On crée un bouton pour chaque réponse possible 
	checkTime()
	currentQuestion.choices.forEach(choice => {

		const answer_btn = document.createElement('button');// On crée un nouveau bouton pour chaque réponse
		answer_btn.innerText = choice; // On met le texte du choix dans le bouton
		answer_btn.classList.add("options");  // On lui donne la classe CSS "options" (pour le style)
		optionsAnswers.appendChild(answer_btn);  // On ajoute le bouton dans la page HTML

		//&Quand on clique sur une réponse...
		answer_btn.addEventListener('click', (event) => {
			const selectedAnswer = event.target.innerText; // On récupère le texte du bouton cliqué
			console.log(selectedAnswer);// juste pour voir ce que l’utilisateur a cliqué

			let result = checkAnswer(selectedAnswer)


			console.log(result)

			// On désactive tous les boutons de réponse pour empêcher de cliquer plusieurs fois
			const allButtons = optionsAnswers.querySelectorAll('.options');
			allButtons.forEach(btn => btn.disabled = true);

			// Si la réponse est correcte (== la bonne réponse définie dans les données)
			if (result === true) {
				event.target.style.border = 'solid green';// On met le bouton en vert
				score++
				console.log(score)
				affichageScore.innerText = `Score ${score}/${quiz.questions.length}`

			} else {
				event.target.style.border = 'solid red'; // Sinon, on met le bouton cliqué en rouge
				console.log(score)
				// Et on cherche le bouton qui contient la bonne réponse, pour le colorer en vert
				//const correctBtn = Array.from(allButtons).find(btn => btn.innerText === currentQuestion.correctAnswer);
				allButtons.forEach(btn => {
					if (btn.innerText === currentQuestion.correctAnswer) {
						btn.style.border = 'solid green';
					}
				})
			}

			// Une fois qu'on a répondu, on autorise à cliquer sur "Suivant"
			nextButton.disabled = false;
		});// Fin de la boucle forEach (création des boutons)
	});// Fin de la fonction loadQuestion
}

//Quand on clique sur le bouton "Suivant"
	nextButton.addEventListener('click', () => {

	// On passe à la question suivante en augmentant l'index
	currentQuestionIndex++;
	affichageTimer.innerText = ''
	// S’il reste des questions, on les affiche
	if (currentQuestionIndex < quiz.questions.length) {
		loadQuestion();
	} else { // Sinon, on affiche un message de fin de quiz
		question.innerText = 'fin du quiz';
		optionsAnswers.innerHTML = '';// on vide les réponses
		nextButton.style.display = 'none';// on cache le bouton "suivant"
		replayButton.style.display = 'block';// on montre le bouton "rejouer"
	}
})
	

//Quand on clique sur le bouton "Rejouer" :
replayButton.addEventListener('click', () => {
	currentQuestionIndex = 0;// on repart de zéro
	replayButton.style.display = 'none';// on cache le bouton "rejouer"
	nextButton.style.display = 'block';//on montre le bouton "suivant"
	score = 0
	affichageScore.innerText = ''

	loadQuestion();// on relance la première question
})

loadQuestion();//Au démarrage, on charge la première question automatiquement


function checkAnswer(response) {
	const currentQuestion = quiz.questions[currentQuestionIndex].correctAnswer;
	if (currentQuestion === response) {
		return true
	} else {
		return false
	}
}

function checkTime() {
	compteur = 10
	let id = setInterval(() => {
		if (compteur === 0) {
			clearInterval(id);

			const allButtons = document.querySelectorAll('.options');
			allButtons.forEach((btn) => {
				btn.disabled = true
				// if check answer btn.innerText => 
				if(checkAnswer(btn.innerText)===true){
					btn.style.border = 'solid green';
				}else{
					btn.style.border = 'solid red'	
				}
			});
			
			//nextButton.click()
		}
		console.log(compteur)
		affichageTimer.innerText = compteur
		compteur--;
	}, 1000)
}

