$(document).ready(function () {

    // create on click events
    ///////////////////////////////////////////////////////////////////////
    //start game
    $("#start-game").on("click", gameStart());

    //reset game
    $("#reset-game").on("click", reset());

    //next question after selecting an answer
    $("#user-answer").on("click", nextQuestion());

    ////////////////////////////////////////////////////////////////////////

    // create var to store the start timer number of 30 seconds, and set countdown to not running
    var counterTime = 30;
    var clockCountdown = false;

    //var to store right answers, wrong, and unanswered
    var rightAnswer = 0;
    var wrongAnswer = 0;
    var unanswered = 0;
    

    // create an array of questions to be stored in objects
    var questionsArray = [{
        question: "Who was the lead singer of the famous 90's rock band Nirvana?",
        answers: ["Kurt Cobain", "Ringo Star", "Adam Gontier", "Steven Tyler"],
        correctAnswer: "Kurt Cobain",
        image: "assets/images/kurt-cobain.gif"
    },
    {
        question: "What famous rapper was murdered on September 13, 1996?",
        answers: ["Biggie Smalls", "Nate Dogg", "Tupac Shakur", "XXXTentacion"],
        correctAnswer: "Tupac Shakur",
        image: "assets/images/tupac.gif"
    }, 
    {
        question: "Who was the angriest judge on American Idol?",
        answers: ["Randy Jackson", "Simon Cowell", "Jennifer Lopez", "Paula Abdul"],
        correctAnswer: "Simon Cowell",
        image: "assets/images/simon-cowell.gif"
    }, 
    {
        question: "Who is the famous rapper that is known by the alter ego Slim Shady?",
        answers: ["Macklemore", "Mack Miller", "Fat Joe", "Eminem"],
        correctAnswer: "Eminem",
        image: "assets/images/eminem.gif"
    }, 
    {
        question: "Who dissed Jay Z on the famous diss track Ether?",
        answers: ["Ice Cube", "Nas", "Ice T", "Beyonce"],
        correctAnswer: "Nas",
        image: "assets/images/nas.gif"
    }, 
    {
        question: "Who is the famous guitarist who died on December 8, 2004; who played lead guitar for Pantera?",
        answers: ["Dimebag Darrell", "Joe Perry", "Buck Owens", "Keith Richards"],
        correctAnswer: "Dimebag Darrell",
        image: "assets/images/dimebag.gif"
    }, 
    {
        question: "Which band wrote the song Boulevard of Broken Dreams?",
        answers: ["Seether", "The Allman Brothers", "Green Day", "Metallica"],
        correctAnswer: "Green Day",
        image: "assets/images/greenday.gif"
    }, 
    {
        question: "Who is the lead singer of Five Finger Death Punch(5FDP)?",
        answers: ["Billy Joe Armstrong", "Luke Skywalker", "Ivan Moody", "Mick Jagger"],
        correctAnswer: "Ivan Moody",
        image: "assets/images/ivan-moody.gif"
    }];

    //create var to store game start function
function gameStart() {

}
// create countdown timer to include in gameStart function
function countdown() {

}
//load question function 
function loadQuestion() {

}
//display next question
function nextQuestion() {

}


//create function for time up
function timeUp() {
    //setTimeout to 30 seconds
    setTimeout(timeUp, 1000 * 30);
}

//correct answer function
function answerCorrect() {

}

//incorrect answer function
function answerIncorrect() {

}

//display results function
function results() {

}

//reset game function
function reset() {

}

})