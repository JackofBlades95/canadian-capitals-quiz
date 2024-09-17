const questions = [{
        question: "What is the capital of Ontario ?",
        optionA: "Ottawa"
        optionB: "Hamilton"
        optionC: "Toronto"
        correctOption: "optionC"

    },

    {
        question: "What is the capital of Quebec ?",
        optionA: "Montreal"
        optionB: "Quebec City"
        optionC: "Gatineau"
        correctOption: "optionB"
    },

    {
        question: "What is the capital of British Columbia ?"
        optionA: "Victoria"
        optionB: "Vancouver"
        optionC: "Surrey"
        correctOption: "optionA"

    },

    {
        question: "What is the capital of Nova Scotia ?"
        optionA: "Cape Breton"
        optionB: "Halifax"
        optionC: "Lunenburg"
        correctOption: "optionB"

    },

    {
        question: "What is the capital of Manitoba ?"
        optionA: "Brandon"
        optionB: "Winkler"
        optionC: "Winnipeg"
        correctOption: "optionC"

    },

    {
        question: "What is the capital of Saskatchewan ?"
        optionA: "Regina"
        optionB: "Moose Jaw"
        optionC: "Saskatoon"
        correctOption: "optionA"

    },

    {
        question: "What is the capital of Prince Edward Island ?"
        optionA: "Charlottetown"
        optionB: "Cornwall"
        optionC: "Stratford"
        correctOption: "optionA"

    },

    {
        question: "What is the capital of Nunavut ?"
        optionA: "Cambridge Bay"
        optionB: "Iqluit"
        optionC: "Arviat"
        correctOption: "optionB"

    },

    {
        question: "What is the capital of Yukon ?"
        optionA: "Whitehorse"
        optionB: "Faro"
        optionC: "Dawson City"
        correctOption: "optionA"

    },

    {
        question: "What is the capital of Newfoundland and Labrador ?"
        optionA: "Bay Roberts"
        optionB: "Grand Falls-Windsor"
        optionC: "St.John's"
        correctOption: "optionC"

    },

    {
        question: "What is the capital of Alberta ?"
        optionA: "Calgary"
        optionB: "Edmonton"
        optionC: "Red Deer"
        correctOption: "optionB"

    },

    {
        question: "What is the capital of New Brunswick ?"
        optionA: "Fredericton"
        optionB: "Edmundston"
        optionC: "Bathurst"
        correctOption: "optionA"

    },

    {
        question: "What is the capital of Northwest Terrirtories ?"
        optionA: "Fort Smith"
        optionB: "Inuvik"
        optionC: "YellowKnife"
        correctOption: "optionC"

    },

];

const quizContainer = document.getElementById('quiz')
const scoreElement = document.getElementById('score')
const questionNumberElement = document.getElementById('question-number')
const questionElement = document.getElementById('question')
const buttonElement = document.getElementById('buttons')
const nextButtonElement = document.getElementById('next-btn')

let score = 0
let questionNumber = 0


