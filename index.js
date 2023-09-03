var inputNumber=[];
var operator;
var count;
setArray(0);

$(document).on("keydown",function(event) {
    var inputByKey=event.key;
    handler(inputByKey);
});
$("button").on("click", function() {
    var inputByScreen=this.innerHTML;
    handler(inputByScreen);
});

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
    var temp=inputNumber[count].slice(0,inputNumber[count].length-1);
    inputNumber[count]=temp;
    printNum();
}
function printNum() {
    $("h1").text(inputNumber[count]);
}
function printOp(op,sign) {
    count++;
    if (count>2) {
        calculator();
    }
    setArray(1);
    operator=op;
    setNum(sign);
    $("h1").text(sign);
    count++;
}
function handler(input) {
    switch (input) {
        case "0": case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case ".":
            setNum(input);
            printNum();
            break;
        case "/": case "➗":
            printOp(div,"➗");
            break;
        case "*": case "✖️":
            printOp(mul,"✖️");
            break;
        case "-": case "➖":
            printOp(sub,"➖");
            break;
        case "+": case "➕":
            printOp(add,"➕");
            break;
        case "c": case "C":
            setArray(0);
            printNum();
            break;
        case "Backspace":
            delNum();
            break;
        case "Enter": case "=":
            calculator();
            setArray(0);
            break;
        case "w": case "W":
            setArray(0);
            operator=null;
            $("h1").text("Welcome");
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
    else {
        $("h1").text(answer);
    }
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
