const quiz = [
  {
    question: "Quel type de données retourne typeof \"Bonjour\" ?",
    answer1: { text: "string", correct: true },
    answer2: { text: "text", correct: false },
    answer3: { text: "char", correct: false },
    answer4: { text: "object", correct: false }
  },
  {
    question: "Quelle boucle permet d'exécuter un bloc tant qu'une condition est vraie ?",
    answer1: { text: "for", correct: false },
    answer2: { text: "foreach", correct: false },
    answer3: { text: "while", correct: true },
    answer4: { text: "if", correct: false }
  },
  {
    question: "Comment déclare-t-on une fonction nommée saluer en JavaScript ?",
    answer1: { text: "def saluer() {}", correct: false },
    answer2: { text: "function saluer() {}", correct: true },
    answer3: { text: "fun saluer() {}", correct: false },
    answer4: { text: "function:saluer() {}", correct: false }
  },
  {
    question: "Que signifie === en JavaScript ?",
    answer1: { text: "égal en valeur", correct: false },
    answer2: { text: "égal en valeur et en type", correct: true },
    answer3: { text: "égal en type uniquement", correct: false },
    answer4: { text: "assignation de valeur", correct: false }
  },
  {
    question: "Que retourne 5 + \"2\" ?",
    answer1: { text: "7", correct: false },
    answer2: { text: "\"52\"", correct: true },
    answer3: { text: "NaN", correct: false },
    answer4: { text: "erreur", correct: false }
  },
  {
    question: "Comment accéder au deuxième élément d’un tableau let fruits = [\"pomme\", \"banane\", \"orange\"] ?",
    answer1: { text: "fruits(2)", correct: false },
    answer2: { text: "fruits.1", correct: false },
    answer3: { text: "fruits[1]", correct: true },
    answer4: { text: "fruits{1}", correct: false }
  },
  {
    question: "Que fait alert(\"Bonjour !\") ?",
    answer1: { text: "Affiche une boîte de texte dans la console", correct: false },
    answer2: { text: "Affiche une boîte de dialogue à l’utilisateur", correct: true },
    answer3: { text: "Crée une variable", correct: false },
    answer4: { text: "Rien du tout", correct: false }
  },
  {
    question: "Quelle est la bonne façon de déclarer une constante ?",
    answer1: { text: "let age = 30;", correct: false },
    answer2: { text: "const age = 30;", correct: true },
    answer3: { text: "var const age = 30;", correct: false },
    answer4: { text: "age := 30;", correct: false }
  },
  {
    question: "Comment accède-t-on à la propriété nom dans l’objet let user = { nom: \"Ali\" } ?",
    answer1: { text: "user(nom)", correct: false },
    answer2: { text: "user.nom", correct: true },
    answer3: { text: "user->nom", correct: false },
    answer4: { text: "user[nom]", correct: false }
  },
  {
    question: "Quelle instruction affiche du texte dans la console du navigateur ?",
    answer1: { text: "print()", correct: false },
    answer2: { text: "echo()", correct: false },
    answer3: { text: "console.log()", correct: true },
    answer4: { text: "show()", correct: false }
  }
];
