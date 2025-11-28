//the stored numbers and operators
let num1 = '';
let num2 = '';
let operator = '';
let display = document.querySelector("input.calcWindow");

//function - assign mouse click events to:
const initialize = function() {
    const buttonNumbers = document.querySelectorAll("button.number");
    const buttonOperators = document.querySelectorAll("button.operator");
    const buttonEquals = document.querySelector("button.equals");
    const buttonClear = document.querySelector("button.clear");

    for (let button of buttonNumbers){
        button.addEventListener("click", onNumberKeyPress(button.innerText)); 
    };
    for (let button of buttonOperators){
        button.addEventListener("click", onOperatorPress(button.innerText));
    };
    buttonEquals.addEventListener("click", onEqualsPress());
    buttonClear.addEventListener("click", onClearPress());
};

// button.number
// button.operator
// button.equals
// button.clear

//function - on num button press
//if operator === ''
//add num to num1 (as string for multi digits)
//if operator !== ''
//add num to num2 (as string for multi digits)
//run display function

//function - on operator button press
//if num2 === ''
//change operator to button value
//if num2 !== ''
//send current num1, num2, operator to calculate function
//then change operator to button value
//run display function

//function - on equals button press
//if num2 !== ''
//process calculation
//else do nothing
//run display function

//calculate function
//takes num1, num2, operator values
//object map - passed in the values, operator is key, value is function to perform the math
//display result as num1
//set num2, operator variables to ''

//display function
//if num2 !== ''
//display num2 on screen
//else if operator !== ''
//display operator on screen
//else display num1 on screen

//clear function
//sets num1, num2, operator, display = ""

