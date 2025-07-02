import { quiz } from './questions.js' // On importe le contenu du fichier questions.js
/*
const firstQuestion = quiz.questions[0];

question.innerText = firstQuestion.text

firstQuestion.choices.forEach(choice => {
  const answer_btn = document.createElement('button');
  answer_btn.innerText = choice;
  answer_btn.classList.add("options");
  options.appendChild(answer_btn);
});*/

//& Variables

let currentQuestionIndex = 0;   	// Index de la première question
let score = 0;						// score utilisateur
let compteur = 10					// Compteur du timer (10 secondes par question)
let id								// Stocke l'id du setInterval
let messageDeFin

//& Tous les éléments HTML

const question = document.getElementById("question-text");				// Zone question
const optionsAnswers = document.getElementById("options-container");	// les boutons réponses
const nextButton = document.getElementById('next-button');				// le bouton "Suivant"
const replayButton = document.getElementById('replay-button')			// le bouton "Rejouer" 
const affichageScore = document.getElementById('affiche-score')			// Zone score
const affichageTimer = document.getElementById('affiche-timer')			// Zone timer
const progress = document.getElementById("progress")					// Barre de progression
const explanationText = document.getElementById('explanation')			// Zone des explications
const timerBar = document.getElementById("timer-bar");


//& Fonctions

//* Fonction qui affiche une question avec ses options

function loadQuestion() {

	// Réinitialisation affichages

	optionsAnswers.innerText = '';											// on vide les anciens boutons réponses
	explanationText.innerText = '';
	// on vide le texte des explications
	//compteur = 10;															// on réinitialise le compteur à 10s
	affichageTimer.innerText = '';										// on affiche le compteur										
	affichageScore.innerText = `Score ${score}/${quiz.questions.length}`	// on met à jour l'affichage du score
	nextButton.disabled = true;												// On désactive le bouton "Suivant" tant qu'aucune réponse n’est cliquée

	// Affiche la question courante
	const currentQuestion = quiz.questions[currentQuestionIndex]; 			// On récupère la question actuelle à partir de l'index
	question.innerText = currentQuestion.text;								// On affiche le texte de la question 

	// Affiche les options sous forme de boutons
	currentQuestion.choices.forEach(choice => {
		affichageTimer.innerText = 10;
		const answer_btn = document.createElement('button');		// Création du bouton réponse
		answer_btn.classList.add("options");  						// On lui donne la classe CSS "options" (pour le style)
		optionsAnswers.appendChild(answer_btn);						// On ajoute le bouton dans le container des options
		answer_btn.innerText = choice; 								// On met le texte du choix dans le bouton réponse


		//~ Écouteur pour gérer le clic sur chaque bouton

		answer_btn.addEventListener('click', () => {

			clearInterval(id);											// On stoppe le timer	
			allButtonsDisabled()										// On désactive tous les boutons
			//const selectedAnswer = event.target.innerText; 			// On récupère le texte de la réponse sélectionnée
			//console.log(selectedAnswer);								// On affiche dans la console ce que l’utilisateur a sélectionné comme réponse
			//console.log(checkAnswer(selectedAnswer))					// On affiche dans la console la réponse selectionnée          
			explanationText.innerText = currentQuestion.explanation 	// On affiche l'explication pour cette question

			//~ On vérifie la réponse et on applique le style

			if (checkAnswer(choice) === true) {											// Si la réponse sélectionnée est vraie
				//event.target.style.border = 'solid green';							// Bordure verte pour la bonne réponse
				answer_btn.style.opacity = 1
				answer_btn.style.backgroundColor = ' #00ff00'

				answer_btn.style.color = 'black';
				score++																	// On incrémente le score
				//console.log(score)													// On affiche dans la console le score
				affichageScore.innerText = `Score ${score}/${quiz.questions.length}`	// On met à jour l'affichage du score


			} else {
				//event.target.style.border = 'solid red'; 								// Sinon, bordure rouge pour mauvaise réponse
				//console.log(score)													// On affiche dans la console le score
				answer_btn.style.opacity = 1
				answer_btn.style.backgroundColor = '#dec504';
				answer_btn.style.border = '#dec504'
				answer_btn.style.color = 'black';
				afficherBonneRéponse()													// Afficher bonne réponse en vert
			}

			nextButton.disabled = false;											// Active le bouton "Suivant", une fois qu'on a répondu
		});
		//affichageTimer.innerText=''
	})
	afficherBarreDeProgression()                                            // on met à jour la barre de progression
	launchCountdown()														// Lance le timer pour la question en cours
}
loadQuestion();	 //Au démarrage, on charge la première question automatiquement


//* Fonction désactiver tous les boutons

function allButtonsDisabled() {

	const allButtons = optionsAnswers.querySelectorAll('.options');
	allButtons.forEach(btn => btn.disabled = true);
}

//* Fonction bonne réponse en vert

function afficherBonneRéponse() {
	const currentQuestion = quiz.questions[currentQuestionIndex]
	const allButtons = optionsAnswers.querySelectorAll('.options')
	const correct_Answer = currentQuestion.correctAnswer

	// Autre méthode : const correctBtn = Array.from(allButtons).find(btn => btn.innerText === currentQuestion.correctAnswer);
	allButtons.forEach(btn => {
		if (btn.innerText === correct_Answer) {
			btn.style.opacity = 1
			btn.style.backgroundColor = ' #00ff00';
			btn.style.color = 'black'							// On met en vert le bouton qui contient la bonne réponse
		}
	})
}

//* Fonction qui vérifie si la réponse donnée est correcte

function checkAnswer(response) {
	const currentQuestion = quiz.questions[currentQuestionIndex]
	const correct_Answer = currentQuestion.correctAnswer
	if (correct_Answer === response) {
		return true
	} else {
		return false
	}
	// const correctAnswer = quiz.questions[currentQuestionIndex].correctAnswer
	// return selectedAnswer === correctAnswer
}



//* Fonction qui gère le compteur
function launchCountdown() {
	clearInterval(id);
	compteur = 10;

	// Affiche la jauge déjà pleine
	timerBar.style.transition = "none";
	timerBar.style.width = "100%";
	timerBar.offsetHeight; // force reflow
	timerBar.style.transition = "width 1s linear, background-color 0.3s ease";
	timerBar.style.backgroundColor = "#28a745"; // vert

	affichageTimer.innerText = compteur;

	id = setInterval(() => {
		compteur--;

		const pourcentage = (compteur / 10) * 100;
		timerBar.style.width = `${pourcentage}%`;
		affichageTimer.innerText = compteur;

		if (compteur > 6) {
			timerBar.style.backgroundColor = "#28a745"; // vert
		} else if (compteur > 3) {
			timerBar.style.backgroundColor = "#ffc107"; // orange
		} else {
			timerBar.style.backgroundColor = "#dc3545"; // rouge
		}

		if (compteur <= 0) {
			clearInterval(id);
			afficherBonneRéponse(); // ✅ Affiche la bonne réponse
			allButtonsDisabled();
			explanationText.innerText = quiz.questions[currentQuestionIndex].explanation;
			nextButton.disabled = false;
		}
	}, 1000);
}


//* Fonction qui affiche barre de progression

function afficherBarreDeProgression() {

	progress.innerHTML = "";								// on vide la jauge de progression
	quiz.questions.forEach(question => {
		progress.innerHTML += "<span></span>"					// pour chaque question on créer un span  (une barre) 
	})

	const spans = document.querySelectorAll('span');		// on selectionne tous les spans

	for (let i = 0; i <= currentQuestionIndex; i++)
		spans[i].style.backgroundColor = "#dec504"			// à chaquue question on affiche la jauge de progression en jaune
}


//* Fonction qui gère le bouton suivant

function boutonSuivant() {


	currentQuestionIndex++
	// Passe à la question suivante
	timerBar.style.backgroundColor = "#28a745";
	clearInterval(id)														// Stoppe le timer en cours


	// S’il reste des questions, on les affiche
	if (currentQuestionIndex < quiz.questions.length) {


		loadQuestion();															// On charge la prochaine question

		// Sinon
	} else {
		question.innerText = 'fin du quiz';										// on affiche un message de fin de quiz
		affichageMessageFin()
		optionsAnswers.innerHTML = '';											// on vide les boutons réponses
		explanationText.innerText = ''											// on vide les explications
		affichageTimer.innerText = ''  											// on vide le timer 
		nextButton.style.display = 'none';										// on cache le bouton "Suivant"
		replayButton.style.display = 'block';									// on affiche le bouton "Rejouer"
		affichageScore.innerText = `Score ${score}/${quiz.questions.length}`	// On met à jour l'affichage du score
		progress.innerHTML = ''
		const barretimer = document.getElementById("timer-bar-container")
		barretimer.style.display = 'none'

		// timerBar.style.display = 'none'
		// timerBar.innerHTML=''

	}
}

//* Fonction message de fin

function affichageMessageFin() {
	messageDeFin = document.createElement('h2')
	if (score > 7) {
		messageDeFin.innerText = ' Bravo ! '
	}
	else if (score < 5) {
		messageDeFin.innerText = ' Revois tes bases'
	}
	else if (score <= 7 || score === 5) {
		messageDeFin.innerText = 'Tu peux faire mieux'
	}
	messageDeFin.classList.add("message-fin"); // Ajoute une classe CSS pour le style
	document.getElementById("quiz-container").appendChild(messageDeFin);

}





//* Fonction pour reinitialiser le quiz pour rejouer

function resetQuiz() {

	currentQuestionIndex = 0;						// on remet à zéro l'index des questions
	score = 0										// on remet à zéro le score
	nextButton.style.display = 'block';				// on affiche le bouton "Suivant"
	replayButton.style.display = 'none';			// on cache le bouton "Rejouer"
	affichageScore.innerText = ''					// on vide le score
	explanationText.innerText = ''
	const barretimer = document.getElementById("timer-bar-container")
	barretimer.style.display = 'block'				// on vide les explications
	document.getElementById("quiz-container").removeChild(messageDeFin);
	loadQuestion();									// on relance la première question
}

// Evenements boutons

nextButton.addEventListener('click', boutonSuivant)

replayButton.addEventListener('click', resetQuiz)
