var questions;
var answers;

window.onload = function() {
    buildQuiz();
}


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
    
    
    function buildQuiz() {
        for (var i = 0; i < questionsArr.length; i++) {

            var questions = $("<div>");

            questions.addClass("question");

            questions.attr("data-name", questionsArr[i].question);

            questions.text(questionsArr[i].question);

            $("#questions").append(questions);

            // Creates Radio buttons for First answer choice

                answerLabelA = $("<label>");
                answerLabelA.addClass("label-a");
                answerLabelA.text(questionsArr[i].answers.a);

                var answerA = $("<input>");
                answerA.addClass("answer");
                answerA.attr("type", "radio");
                answerA.attr("name", questionsArr[i]);

                console.log(questionsArr[i].answers.a);

                $("#label-a").append(answerA);
                $("#questions").append(answerA, answerLabelA);

            // Creates radio buttons for second answer choice

            answerLabelB = $("<label>");
            answerLabelB.addClass("label-b");
            answerLabelB.text(questionsArr[i].answers.b);

            var answerB = $("<input>");
            answerB.addClass("answer");
            answerB.attr("type", "radio");
            answerB.attr("name", questionsArr[i]);

            console.log(questionsArr[i].answers.b);

            $("#label-b").append(answerB);
            $("#questions").append(answerB, answerLabelB);

            // Creates radio buttons for third answer choice

            answerLabelC = $("<label>");
            answerLabelC.addClass("label-c");
            answerLabelC.text(questionsArr[i].answers.c);

            var answerC = $("<input>");
            answerC.addClass("answer");
            answerC.attr("type", "radio");
            answerC.attr("name", questionsArr[i]);

            console.log(questionsArr[i].answers.c);

            $("#label").append(answerC);

            $("#questions").append(answerC, answerLabelC);

            

        };
    };

// (function() {
//     function buildQuiz() {
//       // we'll need a place to store the HTML output
//       const output = [];
  
//       // for each question...
//       myQuestions.forEach((currentQuestion, questionNumber) => {
//         // we'll want to store the list of answer choices
//         const answers = [];
  
//         // and for each available answer...
//         for (letter in currentQuestion.answers) {
//           // ...add an HTML radio button
//           answers.push(
//             `<label>
//               <input type="radio" name="question${questionNumber}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }
  
//         // add this question and its answers to the output
//         output.push(
//           `<div class="question"> ${currentQuestion.question} </div>
//           <div class="answers"> ${answers.join("")} </div>`
//         );
//       });
  
//       // finally combine our output list into one string of HTML and put it on the page
//       quizContainer.innerHTML = output.join("");
//     }
  
//     function showResults() {
//       // gather answer containers from our quiz
//       const answerContainers = quizContainer.querySelectorAll(".answers");
  
//       // keep track of user's answers
//       let numCorrect = 0;
  
//       // for each question...
//       myQuestions.forEach((currentQuestion, questionNumber) => {
//         // find selected answer
//         const answerContainer = answerContainers[questionNumber];
//         const selector = `input[name=question${questionNumber}]:checked`;
//         const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
//         // if answer is correct
//         if (userAnswer === currentQuestion.correctAnswer) {
//           // add to the number of correct answers
//           numCorrect++;
  
//           // color the answers green
//           answerContainers[questionNumber].style.color = "lightgreen";
//         } else {
//           // if answer is wrong or blank
//           // color the answers red
//           answerContainers[questionNumber].style.color = "red";
//         }
//       });
  
//       // show number of correct answers out of total
//       resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//     }
  
//     const quizContainer = document.getElementById("quiz");
//     const resultsContainer = document.getElementById("results");
//     const submitButton = document.getElementById("submit");
//     // const myQuestions = [
//     //   {
//     //     question: "Who is the strongest?",
//     //     answers: {
//     //       a: "Superman",
//     //       b: "The Terminator",
//     //       c: "Waluigi, obviously"
//     //     },
//     //     correctAnswer: "c"
//     //   },
//     //   {
//     //     question: "What is the best site ever created?",
//     //     answers: {
//     //       a: "SitePoint",
//     //       b: "Simple Steps Code",
//     //       c: "Trick question; they're both the best"
//     //     },
//     //     correctAnswer: "c"
//     //   },
//     //   {
//     //     question: "Where is Waldo really?",
//     //     answers: {
//     //       a: "Antarctica",
//     //       b: "Exploring the Pacific Ocean",
//     //       c: "Sitting in a tree",
//     //       d: "Minding his own business, so stop asking"
//     //     },
//     //     correctAnswer: "d"
//     //   }
//     // ];
  
//     // display quiz right away
//     buildQuiz();
  
//     // on submit, show results
//     submitButton.addEventListener("click", showResults);
//   })();