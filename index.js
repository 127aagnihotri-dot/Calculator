
let currentOutput;
function give(val){

    document.getElementById("InputDisplay").value+=val;
}

function giveClear(){
    currentInput="";
    currentOutput="";
    document.getElementById("Input").value=currentInput;
    document.getElementById("Answer").value=currentOutput;

}
function giveEvaluation(){
    const inputBox=document.getElementById("InputDisplay");
    const answerBox=document.getElementById("AnswerDisplay");
    const rawValue=inputBox.value;

    if(rawValue===""){

        return;
    }

    let result=eval(rawValue);
    answerBox.innerHTML=result;




}

function givePrevious(){
    //first get the previously written code
    currentOutput;
    const stored =sessionStorage.getItem("InputDisplay");
    if(stored){
        equations =JSON.parse(stored);
    }
    else{
        equations=[];
        sessionStorage.setItem("InputDisplay",JSON.stringify(currentInput));
    }


    // then get the shawty to be displayed on the answeroutput
}

function giveCurrent(){
    currentOutput;
    document.getElementById("Input").value=currentOutput;
    document.getElementById("Answer").value=currentOutput;
}



