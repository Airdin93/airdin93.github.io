let rightAnswersCounter = 0;

let question = 1;

var timeoutActive = false;

var clickedImage;

var answered = false;

let answer1 =[
    {answer: true}, {answer: false},
    {answer: false}, {answer: false}
];

//DELETE THIS
function test() {
    console.log(rightAnswersCounter);
}

function question1() {
    if (answered === false) {
        clickedImage = 1;
        if (answer1[0].answer === true) {
            rightAnswersCounter++;
            console.log("answer 1 is true");
            changeRightImages();
        }
        changeWrongImages();
        timeoutFunction();
        answered = true;
    }
}

function question2() {
    if (answered === false) {
        clickedImage = 2;
        if (answer1[1].answer === true) {
            rightAnswersCounter++;
            console.log("answer 2 is true");
            changeRightImages();
        }
        changeWrongImages();
        timeoutFunction();
        answered = true;
    }
}

function question3() {
    if (answered === false) {
        clickedImage = 3;
        if (answer1[2].answer === true) {
            rightAnswersCounter++;
            console.log("answer 3 is true");
            changeRightImages();
        }
        changeWrongImages();
        timeoutFunction();
        answered = true;
    }
}

function question4() {
    if (answered === false) {
        clickedImage = 4;
        if (answer1[3].answer === true) {
            rightAnswersCounter++;
            console.log("answer 4 is true");
            changeRightImages();
        }
        changeWrongImages();
        timeoutFunction();
        answered = true;
    }
}

function checkQuestion(){
    if (question === 1){
        answerIs2();
        console.log("answerIs2() active")
        question++;
    }
    else if (question === 2){
        answerIs3();
        console.log("answerIs3() active")
        question++;
    }
    else if (question === 3){
        answerIs4();
        console.log("answerIs4() active")
        question++;
    }
    else if (question === 4){
        answerIs5();
        console.log("answerIs5() active")
        question++;
    }
}


function answerIs2() {
    answer1 =[
        {answer: false}, {answer: true},
        {answer: false}, {answer: false}];
}

function answerIs3() {
    answer1 =[
        {answer: false}, {answer: false},
        {answer: true}, {answer: false}];
}

function answerIs4() {
    answer1 =[
        {answer: false}, {answer: false},
        {answer: false}, {answer: true}];
}

function answerIs5() {
    answer1 =[
        {answer: false}, {answer: true},
        {answer: false}, {answer: false}];
}

function changeImages() {
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var image3 = document.getElementById('image3');
    var image4 = document.getElementById('image4');

    image1.src='images/Answer.png';
    image2.src='images/Answer.png';
    image3.src='images/Answer.png';
    image4.src='images/Answer.png';

    timeoutActive = false;
}

function changeRightImages() {
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var image3 = document.getElementById('image3');
    var image4 = document.getElementById('image4');

    if (answered === false){
        if (answer1[0].answer === true) {
            image1.src='images/AnswerRight.png';
        }
        else if (answer1[1].answer === true) {
            image2.src='images/AnswerRight.png';
        }
        else if (answer1[2].answer === true) {
            image3.src='images/AnswerRight.png';
        }
        else if (answer1[3].answer === true) {
            image4.src='images/AnswerRight.png';
        }
    }
}

function changeWrongImages() {
    var image1 = document.getElementById('image1');
    var image2 = document.getElementById('image2');
    var image3 = document.getElementById('image3');
    var image4 = document.getElementById('image4');

    if (answered === false){
        if (answer1[0].answer === false && clickedImage === 1) {
            image1.src='images/AnswerWrong.png';
        }
        else if (answer1[1].answer === false && clickedImage === 2) {
            image2.src='images/AnswerWrong.png';
        }
        else if (answer1[2].answer === false && clickedImage === 3) {
            image3.src='images/AnswerWrong.png';
        }
        else if (answer1[3].answer === false && clickedImage === 4) {
            image4.src='images/AnswerWrong.png';
        }
    }
}

function changeFunction() {
    checkQuestion();
    changeImages();
    answered = false;
}

function timeoutFunction() {
    if (timeoutActive === false){
    timeoutActive = true;
    window.setTimeout(changeFunction,3000);
    }
}