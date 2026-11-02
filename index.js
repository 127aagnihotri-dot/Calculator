console.log('Happy developing ✨')

let currentInput="";
let currentOutput="";
function give(val){
    currentInput += val;
    document.getElementById("Input").innerText=currentInput;
}

function giveClar(){
    currentInput="";
    currentOutput="";
    document.getElementById("Input").value=currentInput;
    document.getElementById("Answer").innerText=currentOutput;

}
function giveEvaluation(){
    if(currentInput === ""){
        return ;
    }

    let answer=eval(currentInput);
    currentAnswer=answer;
    document.getElementById("Answer").innerText=currentAnswer;

}

function givePrevious(){
    //first get the previously written code
    currentOutput;
    const stored =sessionStorage.getItem("Input");
    if(stored){
        equations =JSON.parse(stored);
    }
    else{
        equations= [];
        sessionStorage.setItem("Input",JSON.stringify(currentInput));
    }


    // then get the shawty to be displayed on the answeroutput
}

function giveCurrent(){
    currentOutput;
    document.getElementById("Input").innerText=currentOutput;
    document.getElementById("Answer").innerText=currentOutput;
}


// document.getEventListener("Keydown",function(e)){
//     if('01234567890'.includes(e.keyCode)|| e.keyCode === '+'||e.keyCode === '-'||e.keyCode === '*'||e.keyCode === '/'||e.keyCode === '**'||e.keyCode === '('||e.keyCode === ')'||e.keyCode === '.'){
//         give(val);
//     }
//     if('Enter'.includes(e.keyCode)||e.keyCode === '-'){
//
//     }
// }

