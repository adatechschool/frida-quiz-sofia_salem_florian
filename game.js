// On importe les questions depuis un autre fichier (questions2.js) pour pouvoir les utiliser ici
import { quiz } from './questions.js'

let currentQuestionIndex = 0; //On commence à 0 (la première question)
let score = 0;
let compteur = 10
let id
// let explanationAdd = 0

// &Tous les éléments HTML
const question = document.getElementById("question-text");//*question
const optionsAnswers = document.getElementById("options-container");//*les boutons de réponse
const nextButton = document.getElementById('next-button');//*le bouton suivant
const replayButton = document.getElementById('replay-button')//*le bouton rejouer (qui est caché voir html)
const affichageScore = document.getElementById('affiche-score')//* le score
const affichageTimer = document.getElementById('affiche-timer')//* le timer
const progress = document.getElementById("progress")//* barre de progression
const explanationText = document.getElementById('explanation')//* les explications

// &Constances
//currentQuestionIndex++
//const currentQuestion = quiz.questions[currentQuestionIndex];

//& Fonctions
	//& Fonction qui affiche une question
	function suivantButton(){
	
		currentQuestionIndex++;
		affichageTimer.innerText = compteur
		clearInterval(id);
		// S’il reste des questions, on les affiche
		if (currentQuestionIndex < quiz.questions.length) {
			loadQuestion();
		} else { // Sinon, on affiche un message de fin de quiz
			question.innerText = 'fin du quiz';
			optionsAnswers.innerHTML = '';// on vide les réponses
			nextButton.style.display = 'none';// on cache le bouton "suivant"
			replayButton.style.display = 'block';// on montre le bouton "rejouer"
			explanationText.innerText = ''
			affichageTimer.innerText=''
		}
}
	function loadQuestion() {

		//* On vide les anciennes réponses (si on est à la 2e ou 3e question par exemple)
		optionsAnswers.innerHTML = '';
		affichageTimer.innerText= compteur;
		explanationText.innerText = '';

		affichageScore.innerText = `Score ${score}/${quiz.questions.length}`

		//* On récupère la question actuelle à partir de l'index
		const currentQuestion = quiz.questions[currentQuestionIndex];
		// explanation.innerText = currentQuestion.explanation;


		//* on affiche la barre de progression des questions
			progress.innerText = "";
			quiz.questions.forEach(question => {
				progress.innerHTML += "<span></span>"
			})
		
			let spans = document.querySelectorAll('span');
		
			for (let i = 0; i <= currentQuestionIndex; i++)
				spans[i].style.backgroundColor = "yellow"

		//* On affiche le texte de la question dans le HTML
		question.innerText = currentQuestion.text;

		//* On désactive le bouton "Suivant" tant qu'aucune réponse n’est cliquée
		nextButton.disabled = true;

		//* On crée un bouton pour chaque réponse possible 
		
		
		currentQuestion.choices.forEach(choice => {

			const answer_btn = document.createElement('button');// On crée un nouveau bouton pour chaque réponse
			answer_btn.innerText = choice; // On met le texte du choix dans le bouton
			answer_btn.classList.add("options");  // On lui donne la classe CSS "options" (pour le style)
			optionsAnswers.appendChild(answer_btn);  // On ajoute le bouton dans la page HTML
		
			//&Quand on clique sur une réponse...
			answer_btn.addEventListener('click', (event) => {
				
				

				const selectedAnswer = event.target.innerText; // On récupère le texte du bouton cliqué
				console.log(selectedAnswer);// juste pour voir ce que l’utilisateur a cliqué

				

				console.log(checkAnswer(selectedAnswer))
				
				explanationText.innerText = currentQuestion.explanation
				clearInterval(id);
				
				// On désactive tous les boutons de réponse pour empêcher de cliquer plusieurs fois
				const allButtons = optionsAnswers.querySelectorAll('.options');
				allButtons.forEach(btn => btn.disabled = true);
				
				// Si la réponse est correcte (== la bonne réponse définie dans les données)
				if (checkAnswer(selectedAnswer) === true) {
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
			affichageTimer.innerText=''
		});// Fin de la fonction loadQuestion
		launchCountdown()
	}

	//Quand on clique sur le bouton "Suivant"
		nextButton.addEventListener('click',suivantButton)
	

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

function launchCountdown() {
	compteur=10
	id = setInterval(() => {
		
		if (compteur === 0) {
			
			clearInterval(id);
			
			const currentQuestion = quiz.questions[currentQuestionIndex];
			if(currentQuestionIndex<=quiz.questions.length){
			const allButtons = document.querySelectorAll('.options');
			allButtons.forEach((btn) => {
				btn.disabled = true
				nextButton.disabled = false
				// if check answer btn.innerText =>
				
				
				explanationText.innerText = currentQuestion.explanation;
				if(checkAnswer(btn.innerText)===true){
					btn.style.border = 'solid green';
					explanationText.innerText = currentQuestion.explanation;
					//explanationText.innerText = ''
					 
					//explanationText.innerText = ''
				}
				
			});
			//suivantButton()
			 //console.log(setTimeout(()=>{suivantButton(),10000}))
			 setTimeout(() => {
          suivantButton();
        }, 10000);
		}}
		
		console.log(compteur)
		affichageTimer.innerText = compteur
		compteur--;
		
	}, 1000)
	console.log("id",id)
	//let startNumber = 0
	//setTimeout(() => { clearInterval(startNumber)}, 10000)
	
}

