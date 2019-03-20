$(document).ready(function () {

    var panel = $("#quiz-area");
    var startCounter = 30;



    $(document).on("click", "#start-over", function (e) {
        game.reset();
    });

    $(document).on("click", ".answer-button", function (e) {
        game.clicked(e);
    });

    $(document).on("click", "#start", function (e) {
        $('#subwrapper').prepend("<h2>Time Remaining: <span id="counter - number">30</span> Seconds</h2>");
        game.loadQuestion();
    });

    var questions = [{
        question: "Who was the lead singer of the famous 90's band Nirvana?",
        answers: ["Kurt Cobain", "Ringo Star", "Adam Gontier", "Steven Tyler"],
        correctAnswer: "Kurt Cobain",
        image: "assets/images/kurt-cobain.gif"
    }, {
        question: "What famous rapper died September 13, 1996?",
        answers: ["Biggie Smalls", "Nate Dogg", "Tupac Shakur", "XXXTentacion"],
        correctAnswer: "Tupac Shakur",
        image: "assets/images/tupac.gif"
    }, {
        question: "Who was the angriest judge on American Idol?",
        answers: ["Randy Jackson", "Simon Cowell", "Jennifer Lopez", "Paula Abdul"],
        correctAnswer: "Simon Cowell",
        image: "assets/images/simon-cowell.gif"
    }, {
        question: "Who is the famous rapper that is known by the alter ego Slim Shady?",
        answers: ["Macklemore", "Mack Miller", "Fat Joe", "Eminem"],
        correctAnswer: "Eminem",
        image: "assets/images/eminem.gif"
    }, {
        question: "Who dissed Jay Z on the famous diss track Ether?",
        answers: ["Ice Cube", "Nas", "Ice T", "Beyonce"],
        correctAnswer: "Nas",
        image: "assets/images/nas.gif"
    }, {
        question:
            answers:
        correctAnswer:
            image:
    }, {
        question:
            answers:
        correctAnswer:
            image:
    }, {
        question:
            answers:
        correctAnswer:
            image:
    }];



    var game = {

    }