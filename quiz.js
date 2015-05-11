var questions = document.getElementsByTagName("question");


/*resets choices style to its original*/
function resetStyle(currentPos) {
    var answers = questions[currentPos].getElementsByTagName("choice");
    for (i = 0; i < answers.length; i++) {
           answers[i].style.color = "black";
}
}


/*defines total number of correct choices (used for CheckBox question type)*/
function totalCorrect(currentPos) {
    var answers = questions[currentPos].getElementsByTagName("choice"),
        totalCorrect = 0;
    for (i = 0; i < answers.length; i++) {
        if (answers[i].getAttribute("correct") == "true"){
            totalCorrect++;
        }
    }
    return totalCorrect;
}


/*checks users answers on button click -> changes style of his choices*/
function findCorrect(currentPos) {
    var answers = questions[currentPos].getElementsByTagName("choice"),
        corAns = 0, incorAns = 0;
    resetStyle(currentPos);
    for (i = 0; i < answers.length; i++) {
        if (answers[i].getElementsByTagName("input")[0].checked == true && answers[i].getAttribute("correct") == "true") {
           corAns++;
           answers[i].style.color = "green";
        }
        else if (answers[i].getElementsByTagName("input")[0].checked == true && answers[i].getAttribute("correct") == "false") {
            incorAns++;
            answers[i].style.color="red";
            }
        }
    if (corAns == totalCorrect(currentPos) && incorAns == 0) {
        questions[currentPos].getElementsByTagName("message")[0].innerHTML = "Correct";
    }
    if (incorAns > 0 || corAns != totalCorrect(currentPos)) {
         questions[currentPos].getElementsByTagName("message")[0].innerHTML = "Incorrect";
    }
}





/*creates Multiple choice question type*/
function createMultiple(currentPos) {
    for (i = 0; i < questions[currentPos].getElementsByTagName("choice").length; i++) {
        questions[currentPos].getElementsByTagName("choice")[i].innerHTML = "<input type='radio' name='choices' value='" + i + "'>" + questions[currentPos].getElementsByTagName("choice")[i].textContent + "</br>";  
    }
    
}

/*creates CheckBox question type*/
function createCheckBox(currentPos) {
    for (i = 0; i < questions[currentPos].getElementsByTagName("choice").length; i++) {
        questions[currentPos].getElementsByTagName("choice")[i].innerHTML = "<input type='checkbox' name='choices' value='" + i + "'>" + questions[currentPos].getElementsByTagName("choice")[i].textContent + "</br>";  
    } }


function go() {
    var currentPos = 0;

    while (currentPos < questions.length) {
        if (questions[currentPos].getAttribute("type") == "Multiple"){createMultiple(currentPos);}
        if (questions[currentPos].getAttribute("type") == "CheckBox"){createCheckBox(currentPos);}
        questions[currentPos].innerHTML += "<button onclick='findCorrect(" + currentPos + ")'> Перевірити </button>";
        currentPos++;
    }
}

window.addEventListener("load", go, false);
