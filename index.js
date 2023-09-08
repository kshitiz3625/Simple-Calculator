var inputNumber=[];
var temp="";
var operator;
var count;
var keys=["0","1","2","3","4","5","6","7","8","9",".","/","*","+","-","Backspace"];
setArray(0);

$("input").on("click", function() {
    var a=$("input").val();
    if (a==="Welcome") {
        clearScreen();
    }
})
$("input").on("keydown", function(event) {
    var myInput=event.key;
    if (keys.includes(myInput)) {
        handler(myInput,"input");
    }
    else {
        event.preventDefault();
    }
})
$(document).on("keydown", function(event) {
    var inputByKey=event.key;
    handler2(inputByKey);
});
$("button").on("click", function() {
    var inputByScreen=this.innerHTML;
    handler(inputByScreen,"button");
    handler2(inputByScreen);
});

function clearScreen() {
    $("input").val("");
}
function messageDisplay(input) {
    $("input").val(input);
}
function setArray(len) {
    count=len;
    for (i=len;i<3;i++) {
        inputNumber[i]="";
    }
}
function setNum(input) {
    inputNumber[count]+=input;
}
function delNum() {
    temp=temp.slice(0,temp.length-1);
    var mine=inputNumber[count].slice(0,inputNumber[count].length-1);
    inputNumber[count]=mine;
}
function printOp(msg) {
    $("h1").text(msg);
}
function setOp(op,sign,inputType) {
    count++;
    if (count>2) {
        calculator();
    }
    setArray(1);
    operator=op;
    setNum(sign);
    if (inputType==="button") {
        messageDisplay(temp);
    }
    count++;
}
function handler2(input) {
    switch(input) {
        case "c": case "C": case "AC":
            clearScreen();
            setArray(0);
            printOp("");
            temp="";
            break;
        case "Backspace": case "CE":
            delNum();
            messageDisplay(temp);
            break;
        case "Enter": case "=":
            calculator();
            setArray(0);
            temp="";
            messageDisplay(temp);
            break;
        case "w": case "W": case "AC":
            setArray(0);
            operator=null;
            messageDisplay("Welcome");
            temp="";
            break;
    }
}
function handler(input,inputType) {
    switch (input) {
        case "0": case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case ".":
            setNum(input);
            if (inputType==="button") {
                temp+=input;
                messageDisplay(temp);
            }
            break;
        case "/": case "➗":
            temp+=input;
            setOp(div,"➗",inputType);
            break;
        case "*": case "✖️":
            temp+=input;
            setOp(mul,"✖️",inputType);
            break;
        case "-": case "➖":
            temp+=input;
            setOp(sub,"➖",inputType);
            break;
        case "+": case "➕":
            temp+=input;
            setOp(add,"➕",inputType);
            break;
    }
}
function calculator() {
    var firstNumber=inputNumber[0];
    var secondNumber=inputNumber[2];
    var n1=Number(firstNumber);
    var n2=Number(secondNumber);
    var answer=main(operator,n1,n2);
    answer=+answer.toFixed(2);   
    console.log(inputNumber);
    if (count>2) {
        setArray(0);
        inputNumber[count]=String(answer);
    }
    printOp(answer);
}
function main(op,n1,n2) {
    return op(n1,n2);
}
function mul(n1,n2) {
    return n1*n2;
}
function div(n1,n2) {
    return n1/n2;
}
function add(n1,n2) {
    return n1+n2;
}
function sub(n1,n2) {
    return n1-n2;
}
