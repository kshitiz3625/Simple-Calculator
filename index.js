var temp="";
var temp2="";
var keys=["0","1","2","3","4","5","6","7","8","9","."];

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
function printOp(msg) {
    $("h1").text(msg);
}
function tempValue() {
    temp="";
    temp2=temp;
}
function delNum() {
    temp=temp.slice(0,temp.length-1);
    temp2=temp2.slice(0,temp2.length-1);
    messageDisplay(temp2);
}
function handler2(input) {
    switch(input) {
        case "/": case "➗":
            temp+="/";
            temp2+="➗";
            messageDisplay(temp2);
            break;
        case "*": case "✖️":
            temp+="*";
            temp2+="✖️";
            messageDisplay(temp2);
            break;
        case "-": case "➖":
            temp+="-";
            temp2+="➖";
            messageDisplay(temp2);
            break;
        case "+": case "➕":
            temp+="+";
            temp2+="➕";
            messageDisplay(temp2);
            break;
        case "c": case "C": case "AC":
            clearScreen();
            printOp("");
            tempValue();
            break;
        case "Backspace": case "CE":
            delNum();
            break;
        case "Enter": case "=":
            calculator();
            tempValue();
            break;
        case "w": case "W": case "AC":
            messageDisplay("Welcome");
            tempValue();
            break;
    }
}
function handler(input,inputType) {
    switch (input) {
        case "0": case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9": case ".":
            temp+=input;
            temp2+=input;
            if (inputType==="button") {
                messageDisplay(temp2);
            }
            break;
    }
}
function calculator() {
    var answer=eval(temp);
    answer=+answer.toFixed(2);
    printOp(answer);
}
