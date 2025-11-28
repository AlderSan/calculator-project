//the stored numbers and operators
let num1 = '';
let num2 = '';
let operator = '';
let output = document.querySelector("input");
let calculated = false;

function initialize() {
    const buttonNumbers = document.querySelectorAll("button.number");
    const buttonOperators = document.querySelectorAll("button.operator");
    const buttonEquals = document.querySelector("button.equals");
    const buttonClear = document.querySelector("button.clear");
    const buttonDecimal = document.querySelector("button.decimal");

    for (let button of buttonNumbers){
        button.addEventListener("click", () => onNumberPress(button.innerText)); 
    };
    for (let button of buttonOperators){
        button.addEventListener("click", () => onOperatorPress(button.innerText));
    };
    buttonEquals.addEventListener("click", () => onEqualsPress());
    buttonClear.addEventListener("click", () => onClearPress());
    buttonDecimal.addEventListener("click", () => onDecimalPress());
};

initialize();


//function - on num button press
function onNumberPress(button){
    console.log(`${button} was pressed.`);
    if (operator === ''){
        if (typeof(num1) === "number"){
            num1 = button;
        } else {
            num1 = num1 + button;
        };
    } else if (operator !== ''){
        num2 = num2 + button;
    };
    display();
};
//if operator === ''
//add num to num1 (as string for multi digits)
//if operator !== ''
//add num to num2 (as string for multi digits)
//run display function

//function on decimal click
function onDecimalPress(){
    if (operator === '' && typeof(num1) !== "number") {
        if (!num1.includes('.')){
            num1 = num1 + '.';
        };
    } else if(operator !== ''){
        if (!num2.includes('.')){
            num2 = num2 + '.';
        };
    };
    display();
}
//if operator === ''
//check for decimal in num1. if no decimal, add it.
//if operator !== ''
//check for decimal in num2. if no decimal, add it.


function onOperatorPress(button){
    console.log(`${button} was pressed.`);
    if (num2 === ''){
        operator = button;
        display();
    } else if (num2 !== ''){
        calculate(parseFloat(num1), parseFloat(num2), operator);
        operator = button;
        display();
    };
};
//if num2 === ''
//change operator to button value
//if num2 !== ''
//send current num1, num2, operator to calculate function
//then change operator to button value
//run display function

//function - on equals button press
function onEqualsPress(){
    console.log(`Equals was pressed.`);
    if (num2 !== ''){
        calculate(parseFloat(num1), parseFloat(num2), operator);
        display()
    } else if (operator !== ''){
        operator = '';
        display();
    };
};
//if num2 !== ''
//process calculation
//else do nothing
//run display function

//function - on clear button press
//sets num1, num2, operator, display = ""
function onClearPress(){
    console.log(`Clear was pressed.`);
    num1 = "";
    num2 = "";
    operator = "";
    display();
};


//calculate function
const operatorMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '=': (a, b) => a == b,   
};

function calculate(a, b, op){
    console.log({a},{b},{op});
    if (op === '/' && b === 0){
        num1 = "BOOM!";
        num2 = '';
        operator = '';
        display();
    } else {
        const result = operatorMap[op](a, b);
        const roundedResult = Math.round(result * 100) / 100;
        console.log({roundedResult});
        num1 = roundedResult;
        num2 = '';
        operator = '';
        display();
    };
};
//takes num1, num2, operator values
//object map - passed in the values, operator is key, value is function to perform the math
//display result as num1
//set num2, operator variables to ''

//display function
function display(){
    if (num2 !== ''){
        output.value = num2;
    } else if (operator !== ''){
        output.value = operator;
    } else {
        output.value = num1;
    }
}
//if num2 !== ''
//display num2 on screen
//else if operator !== ''
//display operator on screen
//else display num1 on screen

//to fix:
//multiple decimals -- done
//divide by zero error -- done
//after calculate, pressing number resets -- done
//backspace button -- in progress
//operator with no num1 
//keyboard support

