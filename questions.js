export const quiz = {
  questions: [
    {
      text: "Quel type de données retourne typeof \"Bonjour\" ?",
      choices: ["string", "text", "char", "object"],
      correctAnswer: "string",
      explanation: "typeof retourne le type de la donnée. Ici, \"Bonjour\" est une chaîne de caractères, donc le résultat est 'string'."
    },
    {
      text: "Quelle boucle permet d'exécuter un bloc tant qu'une condition est vraie ?",
      choices: ["for", "foreach", "while", "if"],
      correctAnswer: "while",
      explanation: "La boucle while vérifie une condition avant chaque tour et s'exécute tant que cette condition est vraie."
    },
    {
      text: "Comment déclare-t-on une fonction nommée saluer en JavaScript ?",
      choices: ["def saluer() {}", "function saluer() {}", "fun saluer() {}", "function:saluer() {}"],
      correctAnswer: "function saluer() {}",
      explanation: "En JavaScript, une fonction est déclarée avec le mot-clé 'function', suivi du nom et des parenthèses."
    },
    {
      text: "Que signifie === en JavaScript ?",
      choices: ["égal en valeur", "égal en valeur et en type", "égal en type uniquement", "assignation de valeur"],
      correctAnswer: "égal en valeur et en type",
      explanation: "=== compare à la fois la valeur et le type. Par exemple, 2 === '2' est faux car les types diffèrent."
    },
    {
      text: "Que retourne 5 + \"2\" ?",
      choices: ["7", "\"52\"", "NaN", "erreur"],
      correctAnswer: "\"52\"",
      explanation: "Quand un nombre est additionné à une chaîne, JavaScript convertit le nombre en chaîne. Donc 5 + \"2\" donne \"52\"."
    },
    {
      text: "Comment accéder au deuxième élément d’un tableau let fruits = [\"pomme\", \"banane\", \"orange\"] ?",
      choices: ["fruits(2)", "fruits.1", "fruits[1]", "fruits{1}"],
      correctAnswer: "fruits[1]",
      explanation: "Les tableaux utilisent des indices qui commencent à 0, donc fruits[1] est le deuxième élément : 'banane'."
    },
    {
      text: "Que fait alert(\"Bonjour !\") ?",
      choices: ["Affiche une boîte de texte dans la console", "Affiche une boîte de dialogue à l’utilisateur", "Crée une variable", "Rien du tout"],
      correctAnswer: "Affiche une boîte de dialogue à l’utilisateur",
      explanation: "alert() montre une fenêtre pop-up avec un message pour l'utilisateur."
    },
    {
      text: "Quelle est la bonne façon de déclarer une constante ?",
      choices: ["let age = 30;", "const age = 30;", "var const age = 30;", "age := 30;"],
      correctAnswer: "const age = 30;",
      explanation: "'const' sert à déclarer une variable constante, c’est-à-dire une valeur qui ne change pas."
    },
    {
      text: "Comment accède-t-on à la propriété nom dans l’objet let user = { nom: \"Ali\" } ?",
      choices: ["user(nom)", "user.nom", "user->nom", "user[nom]"],
      correctAnswer: "user.nom",
      explanation: "Pour accéder à une propriété d’un objet en JavaScript, on utilise le point : user.nom."
    },
    {
      text: "Quelle instruction affiche du texte dans la console du navigateur ?",
      choices: ["print()", "echo()", "console.log()", "show()"],
      correctAnswer: "console.log()",
      explanation: "console.log() permet d'afficher un message dans la console pour tester ou déboguer du code."
    }
  ]
}
