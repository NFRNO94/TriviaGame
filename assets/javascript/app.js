$(document).ready(function () {

    // variable for the space that will be used for the game on html
    var gameSpace = $("#game-space");

    // variable for the timer default time
    var counterTime = 30;

    // create on click events
    ///////////////////////////////////////////////////////////////////////


    $(document).on("click", "#reset", function (e) {
        trivia.resetGame();
    });

    $(document).on("click", ".solution-button", function (e) {
        trivia.userAnswer(e);
    });

    $(document).on("click", "#start-game", function (e) {
        $("#sub-container").prepend('<h4>Time Remaining: <span id="counter-time">30</span> Seconds</h4>');
        trivia.generateQuestion();
    });

    ////////////////////////////////////////////////////////////////////////

    // create an array of questionsArray to be stored in objects
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

        counterStart: function () {

            //selecting the trivia object, and selecting the counter to be decremented by 1.
            trivia.counter--;

            //writing counter into the HTML
            $("#counter-time").html(trivia.counter);

            //if statement to trigger the timeOut function
            if (trivia.counter === 0) {
                console.log("Time is up");
                trivia.timeOut();
            }
        },
        //create function to load a question
        generateQuestion: function () {
            //sets the interval for the timer to 1 second
            timer = setInterval(trivia.counterStart, 1000);

            //write in the question to the html
            gameSpace.html("<h3>" + questionsArray[this.currentQuestion].question + "</h3>");

            //for loop to loop through the questionsArray array, and display all answers
            for (var i = 0; i < questionsArray[this.currentQuestion].answers.length; i++) {
                //make buttons for the answers to the questions in the questionsArray array
                gameSpace.append('<button class="solution-button" id="button-style"' + 'data-name="' + questionsArray[this.currentQuestion].answers[i] + '">' + questionsArray[this.currentQuestion].answers[i] + '</button>');
            }
        },
        nextQuestion: function () {
            //setting the game counter back to the start time of 30 seconds
            trivia.counter = counterTime;

            //showing the counter time in the html
            $("counter-time").html(trivia.counter);

            //incrementing the the current question by one to go to the next question
            trivia.currentQuestion++;

            //execute the generate question function to load a new question
            trivia.generateQuestion();
        },
        timeOut: function () {

            //stops the execution of the timer
            clearInterval(timer);
            //shows in html
            $("counter-time").html(trivia.counter);

            //write the out of time message by adding the h2 element to the html
            gameSpace.html("<h2>Out of time :(</h2>");
            //show the correct answer in the html
            gameSpace.append("<h3>Correct Answer: " + questionsArray[this.currentQuestion].correctAnswer);
            //shows the image for the correct answer
            gameSpace.append('<img src="' + questionsArray[trivia.currentQuestion].image + '">');

            //if statement to set rules for the timeup function
            //shows that if the current question is equal to a question that does not exist
            //(or that after there are no more questions), to set timer to 30 seconds
            if (trivia.currentQuestion === questionsArray.length - 1) {
                //run solution function 
                setTimeout(trivia.solution, 3 * 1000);
            } else {
                //if the question exists, run the the nextQuestion after 30 seconds are up
                setTimeout(trivia.nextQuestion, 3 * 1000);
            }
        },
        solution: function () {
            //clear the timer
            clearInterval(timer);

            //write the results into the html
            //heading
            gameSpace.html("<h3>Game Over. Here are your results!<h3>");
            //show the timer
            $("#counter-time").html(trivia.counter);
            //show the right answers
            gameSpace.append("<h4>Right Answers: " + trivia.rightAnswer + "</h4>");
            //show the wrong answers
            gameSpace.append("<h4>Wrong Answers: " + trivia.wrongAnswer + "</h4>");
            //show how many questionsArray were unanswered
            gameSpace.append("<h4>Unanswered Questions: " + (questionsArray.length - (trivia.wrongAnswer + trivia.rightAnswer)) + "<h4>");
            //create a button to start a new game using the id "reset" from the on click event
            gameSpace.append('<br><button id="reset">New Game</button>');
        },
        userAnswer: function () {
            //clear the timer
            clearInterval(timer);

            //if statement to get data from the click function, and show correct answer
            //if correct answer is selected
            if ($(event.target).data("name") === questionsArray[this.currentQuestion].correctAnswer) {
                //run answerCorrect function
                this.answerCorrect();
                //if not correct, run answerWrong function
            } else {
                this.answerWrong();
            }
        },
        answerWrong: function () {
            //increment the wrong answer by 1
            trivia.wrongAnswer++;

            //clear timer
            clearInterval(timer);

            //write in indicator that answer is wrong using an h2
            gameSpace.html("<h2>Incorrect!</h2>");

            //show the correct answer
            gameSpace.append("<h4>The Correct Answer is: " + questionsArray[trivia.currentQuestion].correctAnswer + "</h4>");

            //show the image for the correct answer
            gameSpace.append('<img src="' + questionsArray[trivia.currentQuestion].image + '">');

            //if statement for when there are no more questionsArray
            if (trivia.currentQuestion === questionsArray.length - 1) {
                //execture the solution function and set time to 30 seconds
                setTimeout(trivia.solution, 3 * 1000);
                //else indicates to run nextQuestion if there are more questionsArray
            } else {
                setTimeout(trivia.nextQuestion, 3 * 1000);
            }
        },
        answerCorrect: function () {
            //increment right answers by 1
            trivia.rightAnswer++;

            //clear timer
            clearInterval(timer);

            //write in indicator that user guess is correct
            gameSpace.html("<h2>Correct!</h2>");

            //show image for the right answer
            gameSpace.append('<img src="' + questionsArray[trivia.currentQuestion].image + '">');

            //if statement for when there are no more questionsArray
            if (trivia.currentQuestion === questionsArray.length - 1) {
                //execture the solution function and set time to 30 seconds
                setTimeout(trivia.solution, 3 * 1000);
                //else indicates to run nextQuestion if there are more questionsArray
            } else {
                setTimeout(trivia.nextQuestion, 3 * 1000);
            }
        },
        resetGame: function () {
            //set current question to 0
            trivia.currentQuestion = 0;

            //set counter back to counterTime(30 seconds)
            trivia.counter = counterTime;

            //clear answers
            trivia.rightAnswer = 0;
            trivia.wrongAnswer = 0;

            //generate a new question for a new game
            trivia.generateQuestion();
        }
    };
});
