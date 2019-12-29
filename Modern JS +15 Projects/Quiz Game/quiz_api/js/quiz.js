let correctAnswer,
    correctNumber = (localStorage.getItem('quiz_game_correct') ? localStorage.getItem('quiz_game_correct') : 0),
    incorrectNumber = (localStorage.getItem('quiz_game_incorrect') ? localStorage.getItem('quiz_game_incorrect') : 0);

document.addEventListener('DOMContentLoaded', function () {
    loadQuestion();

    eventListeners();
});

eventListeners = () => {
    document.querySelector('#check-answer').addEventListener('click', validateAnswer);

    document.querySelector('#clear-storage').addEventListener('click', clearResults);
}

// loads a new question from an API
loadQuestion = () => {
    const url = 'https://opentdb.com/api.php?amount=1&category=17&type=multiple';
    fetch(url)
        .then(data => data.json())
        .then(result => displayQuestion(result.results));
};

// Displays the question into HTML from API

displayQuestion = questions => {

    let array1 = [1, 2, 3];
    let value1 = 4;

    array1.splice(random(1, 3), 0, value1);

    function random(min, max) {
        return Math.round(min + Math.random() * (max - min))
    }

    // create the HTML question
    const questionHTML = document.createElement('div');
    questionHTML.classList.add('col-12');
    questions.forEach(question => {
        // Read the correct answer
        correctAnswer = question.correct_answer;
        // inject the correct answer in the possible answers
        let possibleAnswers = question.incorrect_answers;
        possibleAnswers.splice(random(1, 3), 0, correctAnswer);

        // Add the HTML for the Current Question
        questionHTML.innerHTML = `
            <div class="row justify-content-between heading">
                <p class="category">Category: <strong>${question.category}</strong></p>
                <div class="totals">
                   <span class="badge badge-success">${correctNumber}</span>
                    <span class="badge badge-danger">${incorrectNumber}</span>
                </div>
            </div>
            <h2 class="text-center">${question.question}</h2>
        `;

        // Generating the HTML for possible answers
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('questions', 'row', 'justify-content-around', 'mt-4');
        possibleAnswers.forEach(answer => {
            const answerHTML = document.createElement('li');
            answerHTML.classList.add('col-12', 'col-md-5', 'rounded');
            answerHTML.textContent = answer;
            // attach an event click when the answer is clicked
            answerHTML.onclick = selectAnswer;
            answerDiv.appendChild(answerHTML);
        });
        questionHTML.appendChild(answerDiv);
        // Render into the DOM
        document.querySelector('#app').appendChild(questionHTML);
    });
}

// When an answer is selected
selectAnswer = (e) => {

    // Removes active class from previously selected answer
    if (document.querySelector('.active')) {
        const activeAnswer = document.querySelector('.active');
        activeAnswer.classList.remove('active');
    }
    e.target.classList.add('active');
}
// Showing the error message
const showMessage = () => {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('alert', 'alert-danger', 'col-md-6', 'text-center');
    errorDiv.textContent = 'Please select one answer';
    // Select the questions div to insert the alert;
    const questionsDiv = document.querySelector('.questions');
    questionsDiv.appendChild(errorDiv);

    // Remove an error
    setTimeout(() => {
        document.querySelector('.alert-danger').remove();
    }, 1900);
}
// Checking if an answer is correct and 1 answer is selected
validateAnswer = () => {
    if (document.querySelector('.questions .active')) {
        // Everything is fine, check if an answer is correct or not
        checkAnswer();
    } else {
        showMessage();
    }
}

// Check if an answer is correct
checkAnswer = () => {
    const userAnswer = document.querySelector('.questions .active');

    if (userAnswer.textContent === correctAnswer) {
        correctNumber++;
    } else {
        incorrectNumber++;
    }
    // load the next question
    loadQuestion();
    // Save into local Storage
    saveIntoStorage();

    // Clear previous HTML
    const app = document.querySelector('#app');
    while (app.firstChild) {
        app.removeChild(app.firstChild);
    }

}

// save correct or incorrect totals into storage
saveIntoStorage = () => {
    localStorage.setItem('quiz_game_correct', correctNumber);
    localStorage.setItem('quiz_game_incorrect', incorrectNumber);
}

// Clearing the results from Local Storage
clearResults = () => {
    localStorage.setItem('quiz_game_correct', 0);
    localStorage.setItem('quiz_game_incorrect', 0);

    setTimeout(() => {
        window.location.reload();
    }, 500);
}