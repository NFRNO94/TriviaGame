$(document).ready(function () {

    // variable for the space that will be used for the game on html
    var gameSpace = $("#game-space");

    // variable for the timer default time
    var counterTime = 30;

    // create on click events
    ///////////////////////////////////////////////////////////////////////


    $(document).on("click", "#reset", function(e) {
        trivia.resetGame();
    });

    $(document).on("click", ".solution-button", function(e) {
        trivia.clicked(e);
    });

    $(document).on("click", "#start-game", function(e) {
        $("#sub-container").prepend("<h5>Time Remaining: <span id='counter-time'>30</span> Seconds</h5>");
        trivia.generateQuestion();
    });

    ////////////////////////////////////////////////////////////////////////

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

    //create the game functionality in an object
    var trivia = {
       questions: questionsArray,
       currentQuestion: 0,
       counter: counterTime,
       rightAnswer: 0,
       wrongAnswer: 0,

    //create var to store game start function
        counterStart: function(){
            //selecting the trivia object, and selecting the counterTime to be decremented.
            trivia.counter--;

            //writing it into the HTML
            $("counter-time").html(trivia.counter);

            //if statement to trigger the timeUp function
            if (trivia.counter === 0){
                console.log("Time is up");
                trivia.timeUp();
            }
        },
        //create function to load a question
        generateQuestion: function(){
            //sets the interval for the timer to 1 second
            timer = setInterval(trivia.countdown, 1000);

            //write in the question to the html
            gameSpace.html("<h4>" + questionsArray[this.currentQuestion].question + "</h4>");

            //for loop to loop through the questions array
            for (var i = 0; i < questionsArray[this.currentQuestion].answers.length; i++) {
                //make buttons for the answers for the questions in the questions array
                gameSpace.append("<button class='answer-buttons' id='button-style'" + "data-name='" + questionsArray[this.currentQuestion].answers[i] + "'>" + questionsArray[this.currentQuestion].answers[i]+ "</button>");
            }
        },

 /*
}
// create countdown timer to include in gameStart function
function countdown() {

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
    }*/
}
})