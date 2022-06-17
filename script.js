

// create quiz data
const quizData = [
    {
        question: 'What is the name of the last prophet?',
        a: 'Mohammad',
        b: 'Jesus',
        c: 'Noah',
        d: 'Ibrahim',
        correct: 'a'
    },
    {
        question: 'What the color of SA flag',
        a: 'red',
        b: 'green',
        c: 'white',
        d: 'nothing',
        correct: 'b'
    },
    {
        question: 'What is this?',
        a: 'nothning',
        b: 'quiz',
        c: 'good',
        d: 'woow',
        correct: 'b'
    }, 
    {
        question: 'What is age of president Biden?',
        a: '45',
        b: '34',
        c: '80',
        d: '95',
        correct: 'c'
    }
];

const question = document.getElementById("question")
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("submit");
let curretnQuiz = 0; // tracking questions
loadQuiz();

function loadQuiz(){

    const currentQuizData = quizData[curretnQuiz];

    // load the questions and answers
    question.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
    
}

btn.addEventListener('click', () => {
    curretnQuiz++;

    if(curretnQuiz < quizData.length ){
        loadQuiz();
    }else{
        alert("Finished");
    }
})



