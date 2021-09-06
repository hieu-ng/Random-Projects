
var excludedQuizList = []
var incorrectQuizList = []
var correctQuizList = []
var quizCount = 1
var checkMode = false
var data = fetch('quiz.json')
    .then(response => response.json())
    .then(data => {
        removeOtherCheckBoxesEvent()
        populateQuiz(data)
        submitEvent(data)
    });


populateQuiz = (quizList) => {
    try {
        var updatedQuizList = quizList.filter(quiz => !excludedQuizList.includes(quiz.id))
        console.log("updatedQuizList", updatedQuizList)
        var randomQuiz = updatedQuizList[Math.floor((Math.random() * updatedQuizList.length) + 0)];
        updateExcludedQuizList(randomQuiz.id)
        document.getElementsByTagName("label")[0].innerHTML = `Quiz ${quizCount}`
        document.getElementById("quiz-text").value = randomQuiz.id
        document.getElementById("quiz-text").innerHTML = randomQuiz.text
        document.querySelector('#choice1').nextElementSibling.innerHTML = randomQuiz.choice1
        document.getElementById("choice2").nextElementSibling.innerHTML = randomQuiz.choice2
        document.getElementById("choice3").nextElementSibling.innerHTML = randomQuiz.choice3
        document.getElementById("choice4").nextElementSibling.innerHTML = randomQuiz.choice4
        quizCount += 1
    } catch (error) {
        console.log("Error in populateQuiz", error)
    }
}

submitEvent = (quizList) => {
    try {
        document.querySelector('#submit').addEventListener("click", function (e) {
            var answer = document.querySelector('input[type=checkbox]:checked')
            if (!isEmpty(answer)) {
                answerId = answer.id
                var quizId = document.getElementById("quiz-text").value
                var correctAnswer = quizList.find(quiz => quiz.id == quizId).correctChoice
                console.log("answer", answerId)
                console.log("correctAnswer", correctAnswer)
                if (answerId != correctAnswer) {
                    incorrectQuizList.push(quizId)
                }
                else {
                    correctQuizList.push(quizId)
                    if (excludedQuizList.length < quizList.length) {
                        removeCheckboxes()
                        populateQuiz(quizList)
                    }
                    else {
                        if (incorrectQuizList.length == 0) {
                            alert("Congratulation. You finished the quiz!")
                        }
                        else {

                        }
                    }
                }
            }
            else {
                alert("Please Choose A Choice")
            }

        })
    } catch (error) {
        console.log("Error in submitEvent", error)
    }
}



updateExcludedQuizList = (quizId) => {
    try {
        excludedQuizList.push(quizId)
    } catch (error) {
        console.log("Error in updateExcludedQuizList", error)
    }
}

isEmpty = (variable) => {
    if (typeof variable == 'undefined' || variable == 0 || variable == null || (variable == "")) {
        return true
    } else return false
}

removeOtherCheckBoxesEvent = () => {
    try {
        console.log("document.querySelectorAll('input[type=checkbox]')", document.querySelectorAll('input[type=checkbox]'))
        document.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
            checkbox.addEventListener("change", function (e) {
                if (this.checked) {
                    removeOtherCheckboxes(this.id)

                } else {
                    // do nothing
                }
            })
        })
    } catch (error) {
        console.log("Error in removeOtherCheckBoxesEvent", error)
    }
}

removeOtherCheckboxes = (checkedBox) => {
    try {
        document.querySelectorAll(`input[type=checkbox]:not(#${checkedBox})`).forEach(checkBox => {
            checkBox.checked = false;
        })
    } catch (error) {
        console.log("Error in removeOtherCheckboxes", error)
    }
}

removeCheckboxes = () => {
    try {
        document.querySelectorAll(`input[type=checkbox]`).forEach(checkBox => {
            checkBox.checked = false;
        })
    } catch (error) {
        console.log("Error in removeCheckboxes", error)
    }
}



