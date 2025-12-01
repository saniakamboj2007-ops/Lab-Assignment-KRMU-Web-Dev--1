// Lab 4 - Prompt Quizzer – A Quiz Game

// Step 1: Quiz Questions Array
const quizQuestions = [
    { question: "What is the capital of India?", answer: "new delhi" },
    { question: "Which language is used for styling web pages?", answer: "css" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "Which keyword is used to declare a variable in JavaScript?", answer: "let" },
    { question: "What does CSS stand for?", answer: "cascading style sheet" },
    { question: "What is full form of HOF in JavaScript?", answer: "higher order functions" }

];

// Step 2: Function to Run the Quiz
function runQuiz() {
    let score = 0; // Step 3: Score Initialization

    // Step 4: Loop Through Questions
    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question); // Step 5: Prompt input

        // In case user cancels prompt (null)
        if (userAnswer === null) {
            alert("Quiz cancelled.");
            return;
        }

        // Step 6: Normalize the Input
        userAnswer = userAnswer.toLowerCase().trim();

        // Step 7: Check Answer
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! 🎉"); // Step 8: Immediate feedback
        } else {
            alert(`Wrong ❌ The correct answer is: ${quizQuestions[i].answer}`);
        }
    }

    // Step 9: Display the Final Score
    alert(`Quiz Completed!\nYour Score: ${score} / ${quizQuestions.length}`);
}

// Step 10: Run the quiz in console
runQuiz();
