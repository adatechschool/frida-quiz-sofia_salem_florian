export const quiz ={
  questions: [
  {
    text: "Quel type de données retourne typeof \"Bonjour\" ?",
    choices: ["string", "text", "char", "object"],
    correctAnswer: "string"
  },
  {
    text: "Quelle boucle permet d'exécuter un bloc tant qu'une condition est vraie ?",
    choices: ["for", "foreach", "while", "if"],
    correctAnswer: "while"
  },
  {
    text: "Comment déclare-t-on une fonction nommée saluer en JavaScript ?",
    choices: ["def saluer() {}", "function saluer() {}", "fun saluer() {}", "function:saluer() {}"],
    correctAnswer: "function saluer() {}"
  },
  {
    text: "Que signifie === en JavaScript ?",
    choices: ["égal en valeur", "égal en valeur et en type", "égal en type uniquement", "assignation de valeur"],
    correctAnswer: "égal en valeur et en type"
  },
  {
    text: "Que retourne 5 + \"2\" ?",
    choices: ["7", "\"52\"", "NaN", "erreur"],
    correctAnswer: "\"52\""
  },
  {
    text: "Comment accéder au deuxième élément d’un tableau let fruits = [\"pomme\", \"banane\", \"orange\"] ?",
    choices: ["fruits(2)", "fruits.1", "fruits[1]", "fruits{1}"],
    correctAnswer: "fruits[1]"
  },
  {
    text: "Que fait alert(\"Bonjour !\") ?",
    choices: ["Affiche une boîte de texte dans la console", "Affiche une boîte de dialogue à l’utilisateur", "Crée une variable", "Rien du tout"],
    correctAnswer: "Affiche une boîte de dialogue à l’utilisateur"
  },
  {
    text: "Quelle est la bonne façon de déclarer une constante ?",
    choices: ["let age = 30;", "const age = 30;", "var const age = 30;", "age := 30;"],
    correctAnswer: "const age = 30;"
  },
  {
    text: "Comment accède-t-on à la propriété nom dans l’objet let user = { nom: \"Ali\" } ?",
    choices: ["user(nom)", "user.nom", "user->nom", "user[nom]"],
    correctAnswer: "user.nom"
  },
  {
    text: "Quelle instruction affiche du texte dans la console du navigateur ?",
    choices: ["print()", "echo()", "console.log()", "show()"],
    correctAnswer: "console.log()"
  }
]}



