import * as readline from "readline";

// Maak een interface voor user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array met vragen en antwoorden
const questions = [
  { question: "Wat is de hoofdstad van Nederland?", answer: "Amsterdam" },
  { question: "Welke planeet staat het dichtst bij de zon?", answer: "Mercurius" },
  { question: "Hoeveel poten heeft een spin?", answer: "8" }
];

let score = 0;
let currentQuestion = 0;

// Functie om een vraag te stellen
function askQuestion() {
  if (currentQuestion < questions.length) {
    rl.question(questions[currentQuestion].question + " ", (input) => {
      if (input.trim().toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
        console.log("✅ Goed!");
        score++;
      } else {
        console.log(`❌ Fout! Het juiste antwoord was: ${questions[currentQuestion].answer}`);
      }
      currentQuestion++;
      askQuestion(); // Volgende vraag
    });
  } else {
    console.log(`Je hebt de quiz voltooid! Score: ${score}/${questions.length}`);
    rl.close();
  }
}

// Start de quiz
console.log("Welkom bij de quiz! Beantwoord de volgende vragen:");
askQuestion();
