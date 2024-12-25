alert("Welcome  user"
)
alert("Negative marks will be alloted for every wrong answer")

const question = [

    {
        question: "How can a datatype be declared to be a constant type",
        answer: [
            { text: "const", correct: true },
            { text: "var", correct: false },
            { text: "let", correct: false },
            { text: "constant", correct: false },

        ],
        explanation: "In JavaScript, the 'const' keyword is used to declare a constant."
    },
    {
        question: "Which of the following mathods can be usud to display data in some form using Javascript",
        answer: [
            { text: "document.write()", correct: false },
            { text: "console.log()", correct: false },
            { text: "window.alert()", correct: false },
            { text: "all of the above()", correct: true },

        ],
        explanation: "All of the methods 'document.write()', 'console.log()', and 'window.alert()' can be used to display data in JavaScript."
    },
    {
        question: "Which of the following keywords is used to defin a variable in javascript?",
        answer: [
            { text: "let", correct: false },
            { text: "var", correct: false },
            { text: "Both Aand B", correct: true },
            { text: " None of above", correct: false },

        ],
        explanation: "In JavaScript, both 'let' and 'var' can be used to define variables."
    },
    {
        question: "Which of the following keywords is used to defin a variable in javascript?",
        answer: [
            { text: "let", correct: false },
            { text: "var", correct: true },
            { text: "Both Aand B", correct: false },
            { text: " None of above", correct: false },
        ],
        explanation: "In JavaScript, 'var' can be used to define a variable."
    }


];

const values = ['const', "all of the above()", "Both Aand B", "var"]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const explanationElement = document.getElementById("explanation")
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
            console.log(button.dataset.correct)
        } button.addEventListener("click", selectAnswer);



    });
}

function resetState() {
    nextButton.style.display = "none";
    explanationElement.style.display = "none";
    while (answerButtons.firstChild) {

        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    console.log(selectedBtn)
    const isCorrect = selectedBtn.dataset.correct === "true";
    console.log(isCorrect)
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;

    } else {
        selectedBtn.classList.add("incorrect");
        score--;
        explanationElement.innerHTML = question[currentQuestionIndex].explanation;
        explanationElement.style.display = "block";

    }




    Array.from(answerButtons.children).forEach(button => {
        console.log(answerButtons.children)
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    })
    nextButton.style.display = "block";
}


function showScore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${question.length}`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {

        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();
