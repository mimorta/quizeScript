var questions = document.getElementsByTagName("question");

/*create Multiple choice question*/
function createMultiple(id){
    for (i = 0; i< questions[id].getElementsByTagName("choice").length; i++){
        questions[id].getElementsByTagName("choice")[i].innerHTML = "<input type='radio' name='choices' value='a" + i + "'>"+questions[id].getElementsByTagName("choice")[i].textContent+"</br>";  
    } 
    questions[id].innerHTML += "<button onclick='checkAnswer()'>Перевірити</button></br>";
}

/*function createCheckBox(id){
    
}

function createNumInPut(id){
}

function createStrInput(id){
}*/


function findCorrect(id){
    var answers = questions[id].getElementsByTagName("choice");
    var correctAns = 0;
    for (i = 0; i < answers.lenght; i++){
        if (answers[i].getAttribute("correct")== "true"){
            correctAns = i;
        }
    }
    return correctAns;
}


/*нерабочая функция проверки правильности ответа*/
function checkAnswer(id){
    choice = questions[id].getElementsByName("choices") 
}



function go(){
    for (i = 0; i < questions.length; i++){
        if (questions[i].getAttribute("type") == "Multiple"){
            createMultiple(i);
        }
    }
} /* */
window.addEventListener("load", go, false);