var questions;
var answers;
var numCorrect = 0;

var questionsArr = [
    {
        question: 'Who said, "Veni, Vidi, Vici"?',
        answers: {
            a: "Julius Caesar",
            b: "Maximus Meridius",
            c: "Marcus Antonius"
        },
        correctAnswer: "a"
    },
    {
        question: "How did Marcus Aurelius die?",
        answers: {
            a: "Murdered by his son",
            b: "He died in battle",
            c: "Natural causes"
        },
        correctAnswer: "c"
    },
    {
        question: "Which Legion kidnapped Cleopatra's siblings?",
        answers: {
            a: "Caesar's 10th Legion",
            b: "Legio VI",
            c: "The Fourteenth Legion"
        },
        correctAnswer: "b"
    }
];

window.onload = function() {
    var startBtn = $("<button>");
    startBtn.attr("id", "start");
    startBtn.text("Start");

    $("#start").append(startBtn);
}

    $("#start").on("click", function() {
    buildQuiz();
    $("#start").hide();
    $("#submit").show();
    $("#timer").show();


    var submitBtn = $("<button>");
    submitBtn.attr("id", "submit");
    submitBtn.text("Submit");

    $("#submit").append(submitBtn);

    function buildQuiz() {
        for (var i = 0; i < questionsArr.length; i++) {

            var questions = $("<div>");

            questions.addClass("question");

            questions.attr("data-name", questionsArr[i].question);

            questions.text(questionsArr[i].question);

            console.log(questionsArr[i].question);

            $("#questions").append(questions);

            // Creates Radio buttons for First answer choice

                answerLabelA = $("<label>");
                answerLabelA.addClass("label-a");
                answerLabelA.text(questionsArr[i].answers.a);

                var answerA = $("<input>");
                answerA.addClass("answer");
                answerA.attr("id", questionsArr[i].answers.a);
                answerA.attr("type", "radio");
                answerA.attr("name", i);

                $("#label-a").append(answerA);
                $("#questions").append(answerA, answerLabelA);

                console.log(answerA);

            // Creates radio buttons for second answer choice

                answerLabelB = $("<label>");
                answerLabelB.addClass("label-b");
                answerLabelB.text(questionsArr[i].answers.b);

                var answerB = $("<input>");
                answerB.addClass("answer");
                answerB.attr("id", questionsArr[i].answers.b);
                answerB.attr("type", "radio");
                answerB.attr("name", i);

                $("#label-b").append(answerB);
                $("#questions").append(answerB, answerLabelB);

                console.log(i);

            // Creates radio buttons for third answer choice

                answerLabelC = $("<label>");
                answerLabelC.addClass("label-c");
                answerLabelC.text(questionsArr[i].answers.c);

                var answerC = $("<input>");
                answerC.addClass("answer");
                answerC.attr("id", questionsArr[i].answers.c)
                answerC.attr("type", "radio");
                answerC.attr("name", i);

                $("#label").append(answerC);
                $("#questions").append(answerC, answerLabelC);

                console.log(i);

            console.log();

        };
    };

    var correctAnswers = [
        questionsArr[0].answers.a, questionsArr[1].answers.c, questionsArr[2].answers.b
        
    ];


    function checkAnswers() {
        if ($("#" + questionsArr[0].answers.a).checked === true) {
            numCorrect++;
        } else {

        };

        if ($("#" + questionsArr[1].answers.c).checked === true) {
            numCorrect++;
        };

        if ($("#" + questionsArr[2].answers.b).checked === true) {
            numCorrect++;
        };

        console.log(numCorrect);
    };

    $("#submit").on("click", function() {
        checkAnswers();

    });
});