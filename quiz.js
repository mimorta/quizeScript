var questions = document.getElementsByTagName("question");
var pos = 0;

/*create Multiple choice question*/

/*function createCheckBox(id){
    
}

function createNumInPut(id){
}

function createStrInput(id){
}*/

function findCorrect() {
    var answers = questions[pos].getElementsByTagName("choice");
    for (i = 0; i < answers.length; i++){
        if (answers[i].getElementsByTagName("input")[0].checked == true && answers[i].getAttribute("correct") == "true" ) {
           document.getElementById("demo").innerHTML = "Hello World";
        }
        else if (answers[i].getElementsByTagName("input")[0].checked == true && answers[i].getAttribute("correct") == "false") {
            document.getElementById("demo").innerHTML = "Nahui idi";
        }
    } 
}



function createMultiple() {
    for (i = 0; i < questions[pos].getElementsByTagName("choice").length; i++) {
        questions[pos].getElementsByTagName("choice")[i].innerHTML = "<input type='radio' name='choices' value='" + i + "'>" + questions[pos].getElementsByTagName("choice")[i].textContent + "</br>";  
    }
    
}



function go(){
    for (i = 0; i < questions.length; i++) {
        if (questions[i].getAttribute("type") == "Multiple") {
            pos = i;
            createMultiple();
            questions[pos].innerHTML += "<button onclick='findCorrect()'> Перевірити </button>";
        }
    }
} /* */
window.addEventListener("load", go, false);