/* Array to hold questions for the quiz */

const questions = [{
        question: "What is the capital of Ontario ?",
        optionA: "Ottawa",
        optionB: "Hamilton",
        optionC: "Toronto",
        correctOption: "optionC"

    },

    {
        question: "What is the capital of Quebec ?",
        optionA: "Montreal",
        optionB: "Quebec City",
        optionC: "Gatineau",
        correctOption: "optionB"
    },

    {
        question: "What is the capital of British Columbia ?",
        optionA: "Victoria",
        optionB: "Vancouver",
        optionC: "Surrey",
        correctOption: "optionA"

    },

    {
        question: "What is the capital of Nova Scotia ?",
        optionA: "Cape Breton",
        optionB: "Halifax",
        optionC: "Lunenburg",
        correctOption: "optionB"

    },

    {
        question: "What is the capital of Manitoba ?",
        optionA: "Brandon",
        optionB: "Winkler",
        optionC: "Winnipeg",
        correctOption: "optionC"

    },

    {
        question: "What is the capital of Saskatchewan ?",
        optionA: "Regina",
        optionB: "Moose Jaw",
        optionC: "Saskatoon",
        correctOption: "optionA"

    },

    {
        question: "What is the capital of Prince Edward Island ?",
        optionA: "Charlottetown",
        optionB: "Cornwall",
        optionC: "Stratford",
        correctOption: "optionA"

    },

    {
        question: "What is the capital of Nunavut ?",
        optionA: "Cambridge Bay",
        optionB: "Iqluit",
        optionC: "Arviat",
        correctOption: "optionB"

    },

    {
        question: "What is the capital of Yukon ?",
        optionA: "Whitehorse",
        optionB: "Faro",
        optionC: "Dawson City",
        correctOption: "optionA"

    },

    {
        question: "What is the capital of Newfoundland and Labrador ?",
        optionA: "Bay Roberts",
        optionB: "Grand Falls-Windsor",
        optionC: "St.John's",
        correctOption: "optionC"

    },

    {
        question: "What is the capital of Alberta ?",
        optionA: "Calgary",
        optionB: "Edmonton",
        optionC: "Red Deer",
        correctOption: "optionB"

    },

    {
        question: "What is the capital of New Brunswick ?",
        optionA: "Fredericton",
        optionB: "Edmundston",
        optionC: "Bathurst",
        correctOption: "optionA"

    },

    {
        question: "What is the capital of Northwest Territories ?",
        optionA: "Fort Smith",
        optionB: "Inuvik",
        optionC: "YellowKnife",
        correctOption: "optionC"

    },

];



const scoreElement = document.getElementById('score')
const questionNumberElement = document.getElementById('question-number')
const questionElement = document.getElementById('question')
const buttonElement = document.getElementById('.btn')

let currentQuestionIndex = 0;
let score = 0;

/* Function to load questions */

function loadQuestion() {

    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    document.getElementById('optionA').textContent = currentQuestion.optionA
    document.getElementById('optionB').textContent = currentQuestion.optionB
    document.getElementById('optionC').textContent = currentQuestion.optionC

    questionNumberElement.textContent = currentQuestionIndex + 1;

}

/* Function to start quiz */

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    loadQuestion();
}

const optionAButton = document.getElementById('optionA');
const optionBButton = document.getElementById('optionB');
const optionCButton = document.getElementById('optionC');

/* Function to handle answer */

function handleAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctOption) {
        score++;
        scoreElement.textContent = score;

    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();

    } else {
        finalScore();
        document.querySelector('#optionA').style.display = 'none';
        document.querySelector('#optionB').style.display = 'none';
        document.querySelector('#optionC').style.display = 'none';
    }

}

/* Event listerners */

optionAButton.addEventListener('click', () => handleAnswer('optionA'));
optionBButton.addEventListener('click', () => handleAnswer('optionB'));
optionCButton.addEventListener('click', () => handleAnswer('optionC'));

/* Function for end of the quiz */

function finalScore() {
    questionElement.textContent = "Quiz Complete! Refresh the page to start the quiz over again.";
    questionNumberElement.textContent = "";
    scoreElement.textContent = `Your final score is:  ${score}`;

}

/* To initalize score */

scoreElement.textContent = score;

startQuiz();