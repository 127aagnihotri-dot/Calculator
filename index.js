console.log('Happy developing ✨')

let currentInput="";
let currentOutput="";
function give(val){
    currentInput += val;
    document.getElementById("Input").innerText=currentInput;
}

function giveClear(){
    currentInput="";
    currentOutput="";
    document.getElementById("Input").innerText=currentInput;
    document.getElementById("Answer").innerText=currentOutput;

}
function giveEvaluation(){
    if(currentInput === ""){
        return ;
    }

    let answer=eval(currentInput);
    currentOutput+=answer;
    document.getElementById("Answer").innerText=currentOutput;

}

function givePrevious(){
    //first get the previously written code
    currentOutput;

    // then get the shawty to be displayed on the answeroutput

    document.getElementById("Input").innerText=currentOutput;
    document.getElementById("Answer").innerText=currentOutput;

}


document.getEventListener("Keydown",function(e)){
    if('01234567890'.includes(e.keyCode)|| e.keyCode === '+'||e.keyCode === '-'||e.keyCode === '*'||e.keyCode === '/'||e.keyCode === '**'||e.keyCode === '('||e.keyCode === ')'||e.keyCode === '.'){
        give(val);
    }
    if('Enter'.includes(e.keyCode)||)
}

