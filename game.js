"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Maak een interface voor user input
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Array met vragen en antwoorden
var questions = [
    { question: "Wat is de hoofdstad van Nederland?", answer: "Amsterdam" },
    { question: "Welke planeet staat het dichtst bij de zon?", answer: "Mercurius" },
    { question: "Hoeveel poten heeft een spin?", answer: "8" }
];
var score = 0;
var currentQuestion = 0;
// Functie om een vraag te stellen
function askQuestion() {
    if (currentQuestion < questions.length) {
        rl.question(questions[currentQuestion].question + " ", function (input) {
            if (input.trim().toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
                console.log("✅ Goed!");
                score++;
            }
            else {
                console.log("\u274C Fout! Het juiste antwoord was: ".concat(questions[currentQuestion].answer));
            }
            currentQuestion++;
            askQuestion(); // Volgende vraag
        });
    }
    else {
        console.log("Je hebt de quiz voltooid! Score: ".concat(score, "/").concat(questions.length));
        rl.close();
    }
}
// Start de quiz
console.log("Welkom bij de quiz! Beantwoord de volgende vragen:");
askQuestion();
